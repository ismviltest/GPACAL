let courseCount = 1;

function addCourse() {
    courseCount++;
    const courseContainer = document.getElementById('courseContainer');
    const newCourseDiv = document.createElement('div');
    newCourseDiv.className = 'input-group';
    newCourseDiv.innerHTML = `
        <label for="course${courseCount}Name">Course ${courseCount} Name:</label>
        <input type="text" id="course${courseCount}Name" name="course${courseCount}Name" placeholder="Course Name">
        <label for="course${courseCount}Grade">Course ${courseCount} Grade:</label>
        <input type="text" id="course${courseCount}Grade" name="course${courseCount}Grade" placeholder="Grade">
        <label for="course${courseCount}Credits">Course ${courseCount} Credits:</label>
        <input type="number" id="course${courseCount}Credits" name="course${courseCount}Credits" min="0" step="0.5" placeholder="Credits">
    `;
    courseContainer.appendChild(newCourseDiv);
}

function calculateGPA() {
    const gradePoints = {
        'A': 4.0,
        'B': 3.0,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= courseCount; i++) {
        const grade = document.getElementById(`course${i}Grade`).value;
        const credits = parseFloat(document.getElementById(`course${i}Credits`).value);

        if (grade in gradePoints && !isNaN(credits) && credits > 0) {
            totalPoints += gradePoints[grade] * credits;
            totalCredits += credits;
        }
    }

    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;

    document.getElementById('result').textContent = `Your GPA is: ${gpa}`;
}

function resetForm() {
    document.getElementById('gpaForm').reset();
    document.getElementById('result').textContent = '';
    const courseContainer = document.getElementById('courseContainer');
    while (courseContainer.childElementCount > 1) {
        courseContainer.removeChild(courseContainer.lastChild);
    }
    courseCount = 1;
}
