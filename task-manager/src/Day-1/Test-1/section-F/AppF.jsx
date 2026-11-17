
import PageHeader from './PageHeader.jsx';
import StudentList from './StudentList.jsx';
import PageFooter from './PageFooter.jsx';
// ------ Course Catalogue -----//
import PageHeaders from './Task 2 - Course-Catalogue/Pageheader.jsx';
import CourseList from './Task 2 - Course-Catalogue/CourseList.jsx'
import { courses, students } from './Data..js';



function AppF() {
    return (
        <div>

            <div className='Appf'>
                <PageHeader />
                <StudentList students={students} />
                <PageFooter />
            </div>

            <PageHeaders/>
            <CourseList courses={courses}/>
        </div>
    )
}
export default AppF;