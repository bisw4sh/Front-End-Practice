const pName = document.querySelector('.name')
const rollNo = document.querySelector('.rollNo')
const faculty = document.querySelector('.faculty')
const comment = document.querySelector('.comment')
const storage = document.querySelector('.storage')
const button = document.querySelector('.btn')


//get from previous data from localStorage
const students = JSON.parse(localStorage.getItem('students')) || []

const addStudent = (name, roll, faculty, comment) => {
    students.push({name, roll, faculty, comment})
    localStorage.setItem('students', JSON.stringify(students))

    return {name, roll, faculty, comment}
}

const createStudentElement = ({name, roll, faculty,comment}) => {

    // Create elements
    const ul = document.createElement("ul");
    const studentName = document.createElement("li");
    const studentRoll = document.createElement("li");
    const studentFaculty = document.createElement("li");
    const studentComment = document.createElement("li"); 

    // Fill the content
    studentName.innerText = name
    studentRoll.innerText = roll
    studentFaculty.innerText = faculty
    studentComment.innerText = comment

    ul.append(studentName, studentRoll, studentFaculty, studentComment)
    storage.appendChild(ul)

}
students.forEach(createStudentElement)

button.addEventListener('click', (e) => {
    e.preventDefault()

    const newStudent = addStudent(
                                    pName.value,
                                    rollNo.value,
                                    faculty.value,
                                    comment.value )
    
      createStudentElement(newStudent);

})