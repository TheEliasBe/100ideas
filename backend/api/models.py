from pydantic import BaseModel

class IdeaInput(BaseModel):
    skills: str
    expertise: str
