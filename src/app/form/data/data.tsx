interface UserProps {
  id:number,
  name:string,
  key:string,
}

const Users:UserProps[] = [
  {
    "id": 1,
    "name": "Name",
    "key": "name",
  },
  {
    "id": 2,
    "name": "Email",
    "key": "email",
  },
  {
    "id": 3,
    "name": "Location",
    "key": "location",
  },
  {
    "id": 4,
    "name": "Phone number (start with +234)",
    "key": "phoneNumber",
  },

]
export default Users;