-- 되도록 예약어는 대문자로, 우리가 지어낸 이름은 소문자로 합시다

-- 데이터베이스 목록 
show databases;

-- 데이터베이스 생성
create database lck;

-- 데이터베이스 연결
use lck;

-- 테이블 생성
CREATE TABLE player (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  lane VARCHAR(45) NOT NULL,
  team VARCHAR(45),
  kills INT NULL,
  deaths INT NULL,
  assists INT NULL,
  PRIMARY KEY (id)
);

-- 테이블 제거
DROP TABLE player;

-- 데이터 삽입 (C)
INSERT INTO player VALUES(1, 'faker', 'mid', 't1', 10, 2, 6);
INSERT INTO player VALUES(2, 'oner', 'jg', 't1', 2, 5, 14);
INSERT INTO player VALUES(3, 'zeus', 'top', 't1', 8, 3, 7);
INSERT INTO player VALUES(4, 'gumayusi', 'ad', 't1', 12, 4, 2);
INSERT INTO player VALUES(5, 'keria', 'sup', 't1', 2, 4, 18);

INSERT INTO player (name, lane, team, kills, deaths, assists)
VALUES
('bengi', 'jg', 't1', 4, 5, 17),
('JWP', 'mid', 't1', 30, 0, 5);

-- 데이터 조회 (R)
SELECT * FROM player;

-- 데이터 수정(U)
UPDATE player set name ='sungwoong' WHERE name = 'bengi';

-- 데이터 삭제(D)
DELETE FROM player WHERE name = 'sungwoong';