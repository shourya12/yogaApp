# React

# Yoga Session Registration and Payment System

# Overview:
This project demonstrates a simple login and registration system for users to sign up for yoga sessions, select batches, and make payments.

# Features:
# User Authentication:

Users can register and log in securely to access the yoga session booking system.
# Session Booking:

Upon logging in, users can select a month, year, and preferred batch for yoga sessions.
# Payment Processing:

Users can make payments for their selected session securely.
# Age Restriction:

Users under 18 or above 65 years old are restricted from registering for yoga sessions.
# Payment Status Check:

The system verifies if the user has already made a payment for the selected month. If paid, it displays a message indicating that the payment is already done.
Next Month Registration:

For subsequent months, users can log in and access the yoga registration page to choose a different month, change batches if needed, and make payments for the upcoming sessions.
# Technology Stack:
# Frontend: HTML, CSS, JavaScript,React js
# Backend: Java,SpringBoot
# Database:MySQL

ER Diagram

![image](https://github.com/shourya12/yogaApp/assets/39834612/29864649-f6d0-4e7a-861d-2bbf35dfee60)

# ER Diagram Overview
# Entities:
# User Entity:

# Attributes:
Email (Primary Attribute)
Name
Age
Gender
# Payment Entity:

# Attributes:
Email (Foreign Key referencing User table)
Batch
Month
Year
# Relationships:
# User to Payment Relationship:
One-to-Many relationship from User to Payment.
A user can have multiple payments associated with different batches in a year.
# Functionalities:
User and Payment Relationship:

The User entity's email attribute serves as a primary attribute, uniquely identifying each user.
The Payment entity has a foreign key 'email' that references the User table, ensuring that only registered users can make payments and register for batches.
# Batch Payment Validation:

Before adding data to the Payment table in the backend:
Check if the user has already made a payment for the selected batch.
If the payment exists for the same batch, prevent the user from making another payment for that batch.
Allow the user to pay for the next month's new batch.
# Usage:
User Registration:

Users register with their email, providing additional details such as name, age, and gender.
Payment and Batch Registration:

Upon login, users can select a batch, month, and year for yoga sessions.
The payment system ensures a user can't make duplicate payments for the same batch in a specific month.
# Backend Functionality:

Backend operations verify the user's payment history before allowing payments to avoid duplicate payments for the same batch.
Users can proceed with payment only for the next month's new batch if they've already paid for the current selected month.
Entity Relationship Management:
The ER diagram illustrates the connection between Users and Payments, enforcing data integrity and ensuring that payments are associated with registered users.
The one-to-many relationship between User and Payment entities allows users to have multiple payment records for different batches in a year.
Feel free to incorporate this information into your README to provide a clear understanding of the ER diagram, entity relationships, and functionality related to user registration, payment validation, and batch selection.

