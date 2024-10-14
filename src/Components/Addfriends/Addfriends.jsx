import profile from '../../Image/7178489.png';
const Addfriends = () => {
    return (
        <div className='pr-7'>
           
            <div className='flex flex-row justify-between px-1 py-3 '>
                <div className='flex items-center '>
                    <img className="h-8 w-8 rounded-full" src={profile} alt='profile' />
                    <div className="ml-3 ">
                        <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                        <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
                    </div>
                </div>
                <div>
                    <button>Add Friend</button>
                </div>
            </div>
        </div>
    )
}

export default Addfriends;