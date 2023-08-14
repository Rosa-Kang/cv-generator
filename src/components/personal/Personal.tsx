import Input from "../Input";

type Props = {
    onChange: (value: any) => void;
    fullName: string
    email: string
    phoneNumber: string
    address: string
}

const Personal = ({onChange, fullName, email, phoneNumber, address}: Props) => {
    return (
        <form className="personal-details bg-white p-4 rounded-lg shadow-lg shadow-slate-20 my-8">
            <Input
                type="text"
                id="full-name"
                labelText="Full Name"
                placeholder="First and last name"
                value={fullName}
                onChange={onChange}
                dataKey='fullName'
            />
            <Input
                type="email"
                id="email"
                labelText="Email"
                placeholder="Enter email"
                value={email}
                onChange={onChange}
                dataKey='email'
            />
            <Input
                type="tell"
                id="phone-number"
                labelText="Phone number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={onChange}
                dataKey='phoneNumber'
            />
            <Input
                type="address"
                id="address"
                labelText="Address"
                placeholder="Enter address"
                value={address}
                onChange={onChange}
                dataKey='address'
            />
        </form>
    )
}

export default Personal
