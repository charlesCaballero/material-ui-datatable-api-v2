# About

This is just [material-ui table](https://mui.com/material-ui/react-table/#data-table) with some features of [material-ui datagrid](https://mui.com/x/react-data-grid/).

# Requirements

Requires the following packages:

- [Axios](https://axios-http.com/docs/intro)
- [react-query](https://react-query.tanstack.com/installation)

# Installation

```
npm i material-ui-datatable-api
```

## API

<DataTable/>

These component only accepts the following props:
| Name | Type | Description |
| ------------- |:-----------------:|:-------------|
| header | `Array<HeadCell>` | _required_. Header of the table. |
| dataQuery | `string` | _required_. the url for getting data from database. |
| token | `string` | _optional_. the token used for authorization. |
| getSelection | `function` | _optional_. used to get the selected row from edit, delete, and view buttons in the table. Also gives the array of data from multiple selections. |
| refetch | `function` | _optional_. used to refetch/reload data in the table. |
| disableRowEdit | `boolean` | _optional_. removes the edit button in each row in the table. |
| disableRowDelete | `boolean` | _optional_. removes the delete button in each row in the table. |
| disableRowInfo | `boolean` | _optional_. removes the view button in each row in the table. |
| disableSelection | `boolean` | _optional_. disable checkbox selection. |
| disableFilter | `boolean` | _optional_. removes the filter button in the toolbar. |
| disablePrint| `boolean` | _optional_. removes the print button in the toolbar |

## Interfaces

This typescript interfaces can be imported from this package:

`HeadCell`

```javascript
{
  disablePadding: boolean; //left padding of a column. used in the first column when checkbox selection in not disabled
  id: string; //should be the same with the column name from the table in your database
  label: string;// dispalyed name of column in data table
  numeric: boolean;// used to determine if alignment of column is right or left.
  from?: string;//used when using join in your queries. eg. data:{... from:{}..}
  boolean?: BooleanCell;//value be chipped if given. used in status column
}
```

`BooleanCell`

```javascript
[
  (true: string), //displayed value when boolean is true
  (false: string), //displayed value when boolean is false
];
```

`Order`

```javascript
'asc' | 'desc';
```

### Example Use

```javascript
const tableHeader = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Full Name',
  },
  {
    id: 'age',
    numeric: true,
    disablePadding: false,
    label: 'Age',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address',
  },
  .
  .
  .
  .
];


//
return (
  <DataTable
    header={tableHeader}
    dataQuery={url + '/' + officesQuery}
    token={Cookies.get('token')}
    getSelection={(action, selections) => {
      handleFormOpen(action, selections);
    }}
    refetch={fetch => handleRefetch(fetch)}
    disablePrint={true}
  />
);
```
