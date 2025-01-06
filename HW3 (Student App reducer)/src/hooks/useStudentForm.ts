import { useState } from "react";
import { IStudent } from "../types";
import { validateStudent } from "../utils/validation";

interface IProps {
    passStudent: (std: IStudent) => void
}
const useStudentForm = (props: IProps, INTITIAL_STUDENT: IStudent) => {
    const [student, setStudent] = useState<IStudent>(INTITIAL_STUDENT)
    const [errors, setErrors] = useState<string[]>([])

    const handleChange = (field: string, value: any) => {
        setStudent({ ...student, [field]: value });
    }

    const handleClear = () => {
        setStudent({ name: "", age: 0, coursesList: [], isGraduated: false, id: "", absents: 0 }); 
    };

    const handleCoursesChange = (list: string[]) => {
        setStudent({ ...student, coursesList: list });
    }

    const handleSubmit = () => {
        const newStudent: IStudent = { ...student, id: Date.now().toString() };
        const errors: string[] = validateStudent(newStudent);
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            setErrors([]);
            props.passStudent(newStudent);
            handleClear();
        }
    }

    return {
        handleChange,
        handleSubmit,
        errors,
        student,
        handleCoursesChange,
        handleClear,
    }
}
export default useStudentForm