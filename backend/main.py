from fastapi import FastAPI, HTTPException, Request
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from dotenv import load_dotenv
from openai import OpenAI
from random import choice
import os
import json
from fastapi.middleware.cors import CORSMiddleware

from config.base import ALLOW_ORIGINS, LIMIT
from models import IdeaInput
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)
load_dotenv()

# set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOW_ORIGINS,  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Set up the limiter
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


@app.post("/generate-business-idea/")
@limiter.limit(LIMIT)
async def generate_business_idea(request: Request, idea_input: IdeaInput):
    try:
        # Split the input strings into lists
        skills_list = idea_input.skills.split(',')
        expertise_list = idea_input.expertise.split(',')

        # Choose one word randomly from each list
        chosen_skill = choice(skills_list).strip()
        chosen_expertise = choice(expertise_list).strip()

        # Generate the prompt for GPT-3.5
        prompt = f"""Come up with a business idea using {chosen_skill} in {chosen_expertise}.
        Output your answer as a JSON dict with tags "business_idea_name" and "business_idea_description".
        Limit the name to 100 characters and the description to 300
        """

        print(prompt)

        # Make the API call to OpenAI's GPT-3.5
        openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        debug = os.getenv("ENV") == "test"
        if not debug:
            response = openai_client.chat.completions.create(
                model="gpt-3.5-turbo",  # Update this if you're using a different version/model
                messages=[
                    {
                        "role": "system",
                        "content": prompt
                    }
                ]
            )

            # Extracting the text from the response
            gpt_response = response.choices[0].message.content

            # Constructing the response
            # try to parse as JSON
            try:
                gpt_response = json.loads(gpt_response)
                business_idea_name = gpt_response["business_idea_name"]
                business_idea_description = gpt_response["business_idea_description"]
            except:
                raise HTTPException(status_code=500, detail="Failed to parse the response from GPT-3.5")
        else:
            business_idea_name = "Test Business Idea Name"
            business_idea_description = "Test Business Idea Description"


        return {
            "skill": chosen_skill,
            "expertise": chosen_expertise,
            "business_idea_name": business_idea_name,
            "business_idea_description": business_idea_description
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))