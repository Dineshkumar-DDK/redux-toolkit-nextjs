"use client"
import { useStudent } from "@/redux/hooks/useStudent";
import Image from "next/image";
import { use, useEffect } from "react";
import { fetchData } from "@/redux/actions/studentsAction";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Stu } from "@/redux/reducer/studentReducer";

export default function Home() {
  const { addStudent, students } = useStudent()
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>

          {
            students?.loading ? <p>Loading...</p> :
              <>
                <button onClick={() => addStudent({ Name: `Mohit ${(Math.random()).toFixed(3)}`, Age: 23, City: "Pune" })}>
                  Add Student
                </button>

                <ul>
                  {
                    students?.data?.map((student: Stu) => {
                      return (
                        <li key={student.Name}>{student.Name}-{student.Age}-{student.City}</li>
                      )
                    })
                  }
                </ul>
              </>
          }

        </section>

      </main>

    </div>
  );
}
