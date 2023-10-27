import employeesDB from './DB/Employees.json'
import timeSheetsDB from './DB/Sheets.json'
import { createContext, useContext, useEffect, ReactNode, useState, SetStateAction, Dispatch } from "react";
import { Employee, Timesheet } from './Types';


const EmployeeContext = createContext<{
    employees: Employee[];
    timesheets: Timesheet[];
    userId: string | null;
    setUserId: Dispatch<SetStateAction<string |null>>;
}>({
    employees: [],
    timesheets: [],
    userId:null,
    setUserId: () =>{},
});

export const useEmployeeContext = () => {
    return useContext(EmployeeContext);
};

interface EmployeeProviderProps {
    children: ReactNode;
}

export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [timesheets, setTimesheets] = useState<Timesheet[] >([]);
    const [userId, setUserId] = useState<string | null >(null);



    useEffect(() => {
        setEmployees(employeesDB);
        setTimesheets(timeSheetsDB);
    }, [employeesDB, timeSheetsDB]);

    return (
        <EmployeeContext.Provider value={{employees, timesheets, userId ,setUserId}}>
            {children}
        </EmployeeContext.Provider>
    );
};
