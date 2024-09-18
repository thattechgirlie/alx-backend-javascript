import getListStudents from './0-get_list_students.js';
export default function getStudentsByLocation(student = getListStudents(), city)
{
    return student.filter((el) => el.location === city);
}