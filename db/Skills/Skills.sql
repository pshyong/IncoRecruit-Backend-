CREATE table Skills (
    UID uuid REFERENCES jobseeker(uid),
    Skill varchar(70),
    Ranking int NULL,
    PRIMARY KEY (UID, Skill)
)