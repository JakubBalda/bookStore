CREATE TABLE Books(
	ID int PRIMARY KEY AUTO_INCREMENT,
    Title varchar(100) NOT NULL,
    AuthorID int NOT NULL,
    ISBN varchar(17) NOT NULL,
    Description varchar(200),
    ImageURL varchar(50) ,
    Price decimal(3,2) NOT NULL,
    Amount tinyint NOT NULL,
    
    FOREIGN KEY (AuthorID) REFERENCES Authors(ID)
)
