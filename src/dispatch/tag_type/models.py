from typing import List, Optional
from pydantic import Field

from sqlalchemy import Column, Integer, String
from sqlalchemy.sql.schema import UniqueConstraint
from sqlalchemy.sql.sqltypes import Boolean
from sqlalchemy_utils import TSVectorType

from dispatch.database.core import Base
from dispatch.models import (
    DispatchBase,
    NameStr,
    TimeStampMixin,
    ProjectMixin,
    PrimaryKey,
    Pagination,
)
from dispatch.project.models import ProjectRead


class TagType(Base, TimeStampMixin, ProjectMixin):
    __table_args__ = (UniqueConstraint("name", "project_id"),)
    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    exclusive = Column(Boolean, default=False)
    required = Column(Boolean, default=False)
    discoverable_case = Column(Boolean, default=True)
    discoverable_incident = Column(Boolean, default=True)
    discoverable_query = Column(Boolean, default=True)
    discoverable_signal = Column(Boolean, default=True)
    discoverable_source = Column(Boolean, default=True)
    discoverable_document = Column(Boolean, default=True)
    color = Column(String)
    icon = Column(String)
    search_vector = Column(TSVectorType("name", regconfig="pg_catalog.simple"))
    use_for_project_folder = Column(Boolean, default=False, server_default="f")


# Pydantic models
class TagTypeBase(DispatchBase):
    name: NameStr
    exclusive: Optional[bool] = False
    required: Optional[bool] = False
    discoverable_case: Optional[bool] = True
    discoverable_incident: Optional[bool] = True
    discoverable_query: Optional[bool] = True
    discoverable_signal: Optional[bool] = True
    discoverable_source: Optional[bool] = True
    discoverable_document: Optional[bool] = True
    description: Optional[str] = Field(None, nullable=True)
    color: Optional[str] = Field(None, nullable=True)
    icon: Optional[str] = Field(None, nullable=True)
    use_for_project_folder: Optional[bool] = False


class TagTypeCreate(TagTypeBase):
    project: ProjectRead


class TagTypeUpdate(TagTypeBase):
    id: PrimaryKey = None


class TagTypeRead(TagTypeBase):
    id: PrimaryKey
    project: ProjectRead


class TagTypePagination(Pagination):
    items: List[TagTypeRead]
