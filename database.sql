CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "current_streak" INT,
    "word_goal" INT,
    "time_goal" INT
);
CREATE TABLE "genre" (
"id" SERIAL PRIMARY KEY,
"types" VARCHAR (25) NOT NULL
);
CREATE TABLE "prompt_type" (
"id" SERIAL PRIMARY KEY,
"prompt_type" VARCHAR (25)
);
CREATE TABLE "writing_entry" (
"id" SERIAL PRIMARY KEY,
"user_id" INT,
"entry_name" VARCHAR (200),
"entry_contents" VARCHAR (8000),
"entry_length" INT,
"entry_genre" INT,
"entry_time_length" INT,
"entry_minute_plus_breaks" INT,
"entry_image" INT,
"entry_prompt" INT
);

CREATE TABLE "prompts" (
"id" SERIAL PRIMARY KEY,
"type_of_prompt" INT,
"text" VARCHAR (200),
"image_url" VARCHAR (8000)
);

INSERT INTO "genre" ("types")
VALUES ('Science Fiction'), ('Mystery'), ('Romance');


//New stuff below
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "current_streak" INT,
    "word_goal" INT,
    "time_goal" INT
);
CREATE TABLE "genre" (
"id" SERIAL PRIMARY KEY,
"types" VARCHAR (25) NOT NULL
);
CREATE TABLE "prompt_type" (
"id" SERIAL PRIMARY KEY,
"prompt_type" VARCHAR (25)
);
CREATE TABLE "writing_entry" (
"id" SERIAL PRIMARY KEY,
"user_username" VARCHAR,
"entry_name" VARCHAR (200),
"entry_contents" VARCHAR (8000),
"entry_length" INT,
"entry_genre" VARCHAR (30),
"entry_time_length" INT,
"entry_minute_plus_breaks" INT,
"entry_image" INT,
"entry_prompt" INT
);
