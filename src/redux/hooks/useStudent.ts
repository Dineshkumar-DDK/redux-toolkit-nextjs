'use client';
import { useDispatch, useSelector } from "react-redux"
import { Stu } from "../reducer/studentReducer"
import { add } from '../reducer/studentReducer'
import { studentSelector } from "../selector/studentSelector"

export const useStudent = () => {

    const dispatch = useDispatch()
    const students = useSelector(studentSelector)
    const addStudent = (student: Stu) => {
        dispatch(add(student))
    }
    return {
        addStudent,
        students
    }
}