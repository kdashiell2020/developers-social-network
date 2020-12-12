const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }

});


module.exports = User = mongoose.model('user', UserSchema);


/*
Humility
We are respectful and free from arrogance.
We put the success of our teams over our own and are excited to learn from each other.

(IC) Give an example of when you saw a peer struggling and decided to step in and help. What was the situation and what actions did you take? What was the outcome?

(IC) Describe the toughest piece of negative feedback you’ve received in the last year? How did you respond/adjust?

(Manager) Give me an example of being vulnerable about a weakness or failure w
Grit
We are passionate and hustle to raise the bar.
We persevere through our challenges and grow from our failures.

(IC) Tell me about the last major obstacle you worked through. What was it and how did you push past it?

(IC) Tell me about something you worked on that you were passionate about. How did you go above and beyond to ensure it was successful?

(Manager) Tell me about the last time your work-life balance was stretched with a project/initiative. What was the situation? How did you de


Ownership
We strive for thoughtful impact, take pride in our work, and hold ourselves accountable.
We step up and take on new challenges to help further the success of the company.

Describe a project or idea (not necessarily your own) that was implemented primarily because of your efforts. What was your role? What was the outcome?

Tell me about a time when you took on something significant outside your area of responsibility. Why was it important? What was the outcome?
Connection
We genuinely care about each other and understand that our people are our power.
We celebrate our lived experiences and enjoy helping and supporting each other.

(IC) Give me an example of something you’ve done to build rapport & trust with a colleague or another team? What made you decide to take action? What was the result?

(Manager) Tell me about how you encourage building rapport on your team?
We trust each other to communicate the good and the bad as it relates to doing our best work.
We aren’t afraid to voice our opinions and are receptive to feedback.

(IC) Tell me about a time you disagreed with your manager/executive. How did you share your opinion?

(IC) Give me an example of a time you’ve escalated an issue you saw in your company/product/leaders.

(Manager) Give me an example of how you share successes and failures with your team?  How do you create an environment where your r
Transparency^
*/