CREATE table IF NOT EXISTS Keywords (
    Job_ID uuid REFERENCES job(Job_ID) ON DELETE RESTRICT primary key,
    keyword VARCHAR(50) not NULL
)