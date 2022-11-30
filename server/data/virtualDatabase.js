var aStudent = {
    "name": "Alpha",
    "id": "01234567",
    "classes": [
        {
            "className": "PSYC 1010 - Introduction to Psychology",
            "professorName": "Beta",
            "notifications": [
                {
                    "header": "Chapter 5 Quiz Graded",
                    "category": "Quiz",
                    "dueDate": "N/A",
                    "markAsRead": "Unread",
                    "timestamp": "2022-11-01 01:00:00.000"
                }
            ]
        },
        {
            "className": "LIFE 2050 - Life Sceience II",
            "professorName": "Charlie",
            "notifications": [
                {
                    "header": "Corrections for Eyesight Lab",
                    "category": "Paper",
                    "dueDate": "N/A",
                    "markAsRead": "Unread",
                    "timestamp": "2022-11-01 01:00:00.000"
                }
            ]
        },
        {
            "className": "COMP 4200 - Software Engineering I",
            "professorName": "Delta",
            "notifications": [
                {
                    "header": "Chapter 2 Discussion Board Post Assigned",
                    "category": "Discussion",
                    "dueDate": "2022-11-19",
                    "markAsRead": "Unread",
                    "timestamp": "2022-11-01 01:00:00.000"
                }
            ]
        },
        {
            "className": "COMP 4040 - Analysis of Algorithms",
            "professorName": "Epsilon",
            "notifications": [
                {
                    "header": "Chapter 11 Reading Passed Out",
                    "category": "Reading",
                    "dueDate": "2022-12-01",
                    "markAsRead": "Unread",
                    "timestamp": "2022-11-30 01:00:00.000"
                }
            ]
        }
    ]
}

// public functions
module.exports = {
    // DESCRIPTION: main public function that gets sent a data request and returns a json variable
    // PROTOTYPE: sent a json w/ type of request and any data needed to make request
    getData: async function (dataSlug) {
        const data = await getDataVirtualDatabase(dataSlug);
        return data;
    }
}

async function getDataVirtualDatabase(dataSlug) {
    // if statements to determine request type
    if (dataSlug.requestType == "uniqueNotifications") { // this request will return a list of all notifications for the student
        return await uniqueNotifications();
    }
}

async function uniqueNotifications() {
    try {
        
    } catch (e) {
        console.error(e);
    }

    return obj;
}