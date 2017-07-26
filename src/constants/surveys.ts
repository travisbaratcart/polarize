export function getSurveyFromId(surveyId) {
  return SURVEYS.filter((survey) => {
    return survey.id === surveyId;
  })[0];
}

export function getSurveyQuestionsFromId(surveyId) {
  return getSurveyFromId(surveyId).questions;
}

export const SURVEYS = [
  {
    "id": "Survey_1",
    "author": {
      "imageUrl": "https://lh5.googleusercontent.com/-3d-6t-KnblQ/UyoFC9UDB_I/AAAAAAAAASs/suyew-lv9B0/w1085-h1086/KG%2Bmayor%2Bhead%2Bshot%2Bjan%2B2014.jpg",
      "displayName": "Karen Guzak",
      "title": "Mayor",
      "politicalParty": "Democrat",
      "constituency": {
        "coordinates": "47.9129° N, 122.0982° W",
        "location": "Snohomish, Wa",
        "level": "City",
        "population": 98290
      }
    },
    "questions": [
      {
        "id": "Q_1",
        "title": "Are local parks important to your quality of life?",
        "description": "",
        "options": [
          "Yes",
          "No"
        ]
      },
      {
        "id": "Q_2",
        "title": "Do you think that maintainance of parks is an important area to fund?",
        "description": "",
        "options": [
          "Yes",
          "No"
        ]
      },
      {
        "id": "Q_3",
        "title": "Should we hire more police officers?",
        "description": "There are currently 18 police hired for the city of Snohomish, 2 on duty at all times. Each additional officer costs $100k+ per year",
        "options": [
          "Yes",
          "No"
        ]
      },
      {
        "id": "Q_4",
        "title": "If we should hire more police officers, how should we fund that effort?",
        "description": "",
        "options": [
          "Sales tax",
          "Property tax",
          "Use tax"
        ]
      },
      {
        "id": "Q_5",
        "title": "If more police were hired, where do you think we should appoint their added attention?",
        "description": "",
        "options": [
          "Downtown",
          "Snohomish station",
          "Bike patrols",
          "Squad car partrols"
        ]
      },
      {
        "id" :"Q_6",
        "title": "Do you approve of the local efforts to lower small business taxes and liabilities?",
        "description":"",
        "options":[
        "Approve", "Disapprove", "Neutral"
        ]
      },
      {
        "id": "Q_7",
        "title": "Where should the Mayor and city council be focusing their efforts?",
        "description":"",
        "options":[
        "Infrastructure",
        "Water, sewage and garbage",
        "City parks",
        "Small businesses",
        "Education",
        "Tourism"
        ]
      }
    ]
  },
  {
    "id": "Survey_2",
    "author": {
      "imageUrl": "https://bloximages.chicago2.vip.townnews.com/cecildaily.com/content/tncms/assets/v3/editorial/1/e6/1e67a68c-54e1-5857-9954-92a2f6778c75/58fa30bae0cd6.image.jpg",
      "displayName": "Allison Galbraith",
      "title": "Congresional Hopeful",
      "politicalParty": "Democrat",
      "constituency": {
        "coordinates": "38.9209° N, 75.9552° W",
        "location": "Queen Annes County, MD",
        "level": "State",
        "population": 48929,
      }
    },
    "questions": [
      {
        "id": "Q_1",
        "title": "What are your thoughts on gun rights?",
        "description": "",
        "optionType": "checkbox",
        "options": [
          "The right to firearms should be completely unrestricted",
          "Maryland should be an open carry state",
        	"Gun rights should stay as they are",
        	"High capacity magazines and assault rifles should be banned",
        	"Gun ownership should require mandatory safety training",
        	"Illegal weapon posession should carry a heavy mandatory jail sentance",
        	"Handguns should be illegal",
        	"All personal firearm ownership (with limited exception) should be outlawed",
        ]
      },
      {
        "id": "Q_2",
        "title": "Are you in favor of the Trump Administration returning the seized Russian diplomatic compound on the eastern shore the Russians?",
        "description": "",
        "options": [
          "In Favor",
          "Not in Favor",
  	      "Neutral"
        ]
      },
      {
        "id": "Q_3",
        "title": "Are you in favor of offshore wind farming to create jobs and energy production for Maryland?",
        "description": "",
        "options": [
          "In the atlantic?",
          "In the bay?"
        ]
      },
      {
        "id": "Q_4",
        "title": "What is your preferred solution to the healthcare system?",
        "description": "",
        "options": [
          "Repeal the ACA/Obamacare Completely",
          "Repeal and replace with the GOP or house senate plan",
          "Keep the ACA as is",
        	"Improve the ACA",
        	"Move to medicare for all/Single payer (Medicare/medicaid system)",
        	"Move to socialized medicine (Veterans Affair System)",
        ]
      }
    ]
  },
  {
    "id": "Survey_3",
    "author": {
      "imageUrl": "http://uploads.webflow.com/56fa5fd1204063eb546bb60d/5806143408868fec6c6de63e_donald-trump_416x416.jpg",
      "displayName": "Donald Trump",
      "title": "President",
      "politicalParty": "Republican",
      "constituency": {
        "coordinates": "39.83333° N, -98.58334° E",
        "location": "U.S.A",
        "level": "Federal",
        "population": 323950000,
      }
    },
    "questions": [
      {
        "id": "Q_1",
        "title": "How are the senate and house doing with healthcare?",
        "description": "",
        "options": [
          "Approve",
        	"Disapprove",
        	"Neutral",
        ]
      },
      {
        "id": "Q_2",
        "title": "Should NASA be a priority of the US Government?",
        "description": "",
        "options": [
          "Yes",
          "No",
        	"Neutral",
        ]
      },
      {
        "id": "Q_3",
        "title": "Should taxes be increased on those making above $500k per year?",
        "description": "",
        "options": [
          "Yes",
          "No",
        ]
      },
      {
        "id": "Q_4",
        "title": "What is your preferred solution to the healthcare system?",
        "description": "",
        "options": [
          "Repeal the ACA/Obamacare Completely",
          "Repeal and replace with the GOP or house senate plan",
          "Keep the ACA as is",
        	"Improve the ACA",
        	"Move to medicare for all/Single payer (Medicare/medicaid system)",
        	"Move to socialized medicine (Veterans Affair System)",
        ]
      }
    ]
  }
]
