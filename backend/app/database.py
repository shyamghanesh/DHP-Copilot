from functools import lru_cache

from pydantic_settings import BaseSettings
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker


class Settings(BaseSettings):
    database_url: str = "postgresql+psycopg2://dhp:dhp@localhost:5432/dhp"

    class Config:
        env_prefix = "DHP_"


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
engine = create_engine(settings.database_url, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)


class Base(DeclarativeBase):
    pass
