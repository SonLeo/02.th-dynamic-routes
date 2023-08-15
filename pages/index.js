import style from '../styles/Home.module.css'
import { getStudents } from './mock-data/data'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={style.container}>
            <main className={style.main}>
                <table className={style.table}>
                    <thead>
                        <tr className={style.tr}>
                            <th className={style.th}>ID</th>
                            <th className={style.th}>Name</th>
                            <th className={style.th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getStudents().map(student => (
                            <tr className={style.tr} key={student.id}>
                                <td className={style.td}>{student.id}</td>
                                <td className={style.td}>{student.name}</td>
                                <td className={style.td}>
                                    <Link href={`/student/${encodeURIComponent(student.id)}`}>
                                        Show Student
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}