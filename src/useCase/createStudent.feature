Scenario: I am a teacher trying to create a student
  Given I am a teacher
  When I try to register a student with valid information
  Then I should expect a success message and a new student saved to db

Scenario: Invalid email
  Given I am trying to create a student with an invalid email
  When I try and create the student
  Then I should expect an invalid email error to be thrown

Scenario: Invalid firstName
  Given I am trying to create a student with an invalid firstName
  When I try and create the student
  Then I should expect an invalid firstName error to be thrown

Scenario: Invalid lastName
  Given I am trying to create a student with an invalid lastName
  When I try and create the student
  Then I should expect an invalid lastName error to be thrown