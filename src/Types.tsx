export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    phone: string;
    roleId: number;
    managerId: string | null;
    address: string | null;
    postalCode: string | null;
    city: string | null;
    country: string | null;
    subDepartment: {
        id: string;
        title: string;
    } | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        archivedAt: string | null;
        email: string;
        phone: string;
        position: string;
        avatar: {
            link: string | null;
        } | null;
    } | null;
    avatar: {
        link: string | null;
    };
    department: {
        id: string;
        title: string;
        managerId: string;
    };
    group: null;
    division: {
        id: string;
        title: string;
        managerId: string;
    } | null;
}


export type Timesheet = {
    id: string;
    assessment: number;
    breakMinutes: number;
    minutes: number;
    startTime: string;
    endTime: string;
    note: string | null;
    status: string;
    locationChecked: boolean;
    approvalPersonId: string | null;
    userId: string;
    companyId: string;
}