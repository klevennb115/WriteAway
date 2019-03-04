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
"submission_time" VARCHAR (60),
"entry_prompt" VARCHAR (800)
);

CREATE TABLE "prompts" (
"id" SERIAL PRIMARY KEY,
"type_of_prompt" INT,
"text" VARCHAR (1000),
"image_url" VARCHAR (200)
);

INSERT INTO "genre" ("types")
VALUES ('Science Fiction'), ('Mystery'), ('Romance');

INSERT INTO "prompt_type" ("prompt_type")
VALUES ('Creative'), ('Sci-fi'), ('Fantasy'), ('Advice'), ('Image'), ('Journal'), ('Affirmation');

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('advice'), ('Quantity creates quality');

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('4','Quantity creates quality:
The best hygiene for beginning writers or intermediate writers is to write a hell of a lot of short stories. If you can write one short story a week—it doesn’t matter what the quality is to start, but at least you’re practicing, and at the end of the year you have 52 short stories, and I defy you to write 52 bad ones. Can’t be done. At the end of 30 weeks or 40 weeks or at the end of the year, all of a sudden a story will come that’s just wonderful. - Ray Bradbury');

SELECT * FROM "writing_entry"
WHERE "writing_entry"."user_username" > 0;
SELECT * FROM writing_entry
WHERE user_username='a';

UPDATE "writing_entry" SET "entry_contents"= '{"blocks":[{"key":"1f5fm","text":"Hibbity hobbity","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}' WHERE "id" = 10;

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('4','If writing seems hard, it’s because it is hard. It’s one of the hardest things people do. – William Zinsser');
