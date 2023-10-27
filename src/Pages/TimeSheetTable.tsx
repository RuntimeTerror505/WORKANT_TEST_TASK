import { Button, Form, Table } from "react-bootstrap";
import { useEmployeeContext } from "../context";
import dayjs from 'dayjs'
import { Dispatch, SetStateAction, useState } from "react";
import { Timesheet } from "../Types";
import { TbFolderCancel } from 'react-icons/tb';




const TimesheetsTable = ({ open, setOpen }: {open: boolean, setOpen:Dispatch<SetStateAction<boolean>>;}) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    
    const { timesheets, userId} = useEmployeeContext()
    const [filteredData] = useState<Timesheet[]>(timesheets.filter(item=> item.userId === userId)|| [])
    const [filter, setFilter] = useState('')


    return (
        <div className="container">
            <Form.Select 
                aria-label="select filter" 
                size='sm' 
                style={{ width: '200px', marginBottom: '40px' }} 
                onChange={(e)=>setFilter(e.target.value)}
            >
                <option value="0">Monthly filter</option>
                {monthNames.map((month, index) => (<option key={index} value={index+1}>{month}</option>))}
            </Form.Select>

            <Table striped bordered hover className='table'>
                <thead>
                    <tr>
                        <th>user Id</th>
                        <th>DATE</th>
                        <th>status</th>
                        <th>assessment hours</th>
                        <th>break minutes</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.filter(item=> filter ? filter === dayjs(item.startTime).format('M') : item).length//if no items show no data!
                        ? filteredData.filter(item=> filter ? filter === dayjs(item.startTime).format('M') : item )
                            .map(item => (
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{dayjs(item.startTime).format('dddd,MMMM,YYYY')}</td>
                                    <td>{item.status}</td>
                                    <td>{item.assessment}</td>
                                    <td>{item.breakMinutes}</td>
                                    <td>
                                        <Button variant="dark" className='showBTN' size="sm" onClick={()=>setOpen(!open)}>Back</Button>
                                    </td>
                                </tr>
                            )) 
                        :<>
                            <tr style={{ textAlign: 'center',}}>
                                <td colSpan={5} style={{ height: '100px', paddingTop:'40px'}} ><TbFolderCancel/><span style={{marginLeft: '10px'}} >no data</span></td>
                            </tr>
                            <tr style={{ textAlign: 'center'}}>
                                <td colSpan={5}>
                                    <Button variant="dark" className='showBTN' size="sm" onClick={()=>setOpen(!open)}>Back</Button>
                                </td>
                            </tr>
                        </> 
                }
                </tbody>
            </Table>
        </div>
    )
}
export default TimesheetsTable;