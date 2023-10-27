import { Button, Table } from "react-bootstrap";
import { useEmployeeContext } from "../context";
import { Dispatch, SetStateAction } from "react";

const EmployeeTable = ({ open, setOpen }: {open: boolean, setOpen:Dispatch<SetStateAction<boolean>>;}) => {
    const { employees, setUserId } = useEmployeeContext()

    return (
        <div className="container">
            <Table striped bordered hover className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Work time sheets</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(item =>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.position}</td>
                            <td>
                            <Button variant="dark" className='showBTN' size="sm" onClick={()=>{
                                setOpen(!open)
                                setUserId(item.id)
                            }}>show details</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default EmployeeTable;