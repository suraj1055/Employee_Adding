import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

const Data = ({ employeeList }) => {

    return (
        <div className="data-wrapper">
            <div className="data-heading">
                <h2> LIST OF EMPLOYEE'S </h2>
            </div>

            <GridComponent dataSource={employeeList} className="grid-table">

                <ColumnsDirective className="columns">
                    <ColumnDirective field='Name' width='50' textAlign="center" />
                    <ColumnDirective field='Department' width='50' />
                </ColumnsDirective>
                
            </GridComponent>

        </div>
    )
}

export default Data;