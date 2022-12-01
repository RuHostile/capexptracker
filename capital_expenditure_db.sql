Create database if not exists capexptrackerdb;
use capexptrackerdb;


create table if not exists User_Table(
	UserId int,
    UserName varchar(90),
    UserEmail varchar(45),
    UserPassword varchar(255),
    UserDepartment varchar(45)
);

create table if not exists Project_Table(
	ProjectID int,
    ProjectName varchar(45),
    ProjectDescription varchar(255),
    ProjectCapitalExpenditure int
);

create table if not exists Expense_Table(
	ExpenseID int,
    ExpenseDescription varchar(255),
    ExpenseAmount float,
	ProjectId int,
    UserId int
);
	
Show tables;    
Select * from User_Table;