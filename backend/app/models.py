from sqlalchemy import Column, Integer, String, Float
from .database import Base

class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)
    prompt = Column(String)
    model = Column(String)
    response = Column(String)
    latency = Column(Float)
    tokens = Column(Integer)

class Vote(Base):
    __tablename__ = "votes"

    id = Column(Integer, primary_key=True, index=True)
    model = Column(String)
    rating = Column(Integer)
