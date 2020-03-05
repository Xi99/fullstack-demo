DROP DATABASE IF EXISTS bugs;

CREATE DATABASE bugs;
 
\c bugs;

CREATE TABLE bug (
    bugName SERIAL,
    bugDescription TEXT,
    reportedBy TEXT,
    createdDate TEXT default (to_char(CURRENT_DATE, 'MM/DD/YYYY')),
    assignedTo TEXT,
    threatLevel TEXT
)
