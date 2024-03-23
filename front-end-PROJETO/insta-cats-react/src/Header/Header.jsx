import './Header.css'

const Header = () => {
    return (
        <header style={{"color":"black"}}>
            <nav className="navbar" style={{"background-color":"#EB6440"}}>
                <img className="catLogo" src="https://s3-alpha-sig.figma.com/img/fc41/dd5a/37c30e06e5f7b0fed5c7f7c013451853?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWDx~w5XtW5ejrUYEVWBlaxdChWusIs8tqIQgiZFDCX94h0BcdTlL0BcQ-c7qhGrwwAzMQfOQiDEXfXMFbAodhLVSf5FoQM8bstB8IRxr2pnJx3QvQDSZaqOAzlgpiR0uS4IO9jjDru2uVbHPY5~zIvfdkhIyRj1QHODbzOh~Vd3dW9YJO4mWqq-E1dI2uZZCz04130Q4Otg0VrWogQt7bq25-4jUB4JEDJ0I97VTLIjJ0vWYeNfdNzI-hzDz-L9GSWiiA5lVsKgM9IEcieWTxBoGlfXuGKwE7PUAana46xZ6a04WjQCqusWVLD1ydUcvI6oIJRVVCXeUlUTU30MCA__" alt="" />
                <div className="navbar-links">
                <ul className='navbar-ul'>
                    <li className='navbar-li'><a class="login">LOGIN</a></li>
                    <li className='navbar-li'><a class="registrar">REGISTRAR</a></li>
                </ul>
            </div>
            </nav>
            <section className='img-cats'>
                <div className='cats-box1'>
                    <img className='img-1' src="https://s3-alpha-sig.figma.com/img/e347/8e7e/6262cb8ffc6b5849c6f84662267a2c7d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JxUt3JSokNdWNRTIsrMiaYRaUXzQdjCpAd8~J7n2xu9t4eX0n-mJZOd9YxTyX4Cf5BZN~Tb2vNKPKqYSKchyA9Cv2BzcI3hz~Nq6skC6eWAAbAJf-MAu90WZM~9eoC0~P21eocaJ1P9rWIW5XatPOhRKd-53t3lRUC3a7Wp3B60Oy6RJiwRrwdIG76XRcLQp3AH2ac~~DsPKlk5oiPmvHBCpwbf9uYgg5utKvq5tdQN2q1NV88v4r3m0y9Jq2ghH~m-H5FmL4ZP5TLIfpWZ2hdNezq30zqC3-t0ZVqOlOSt7g13X2scc1evNu6omAqUFAVkubWLApS9OmrLqeyB36A__" alt="" />
                    <img className='img-2' src="https://s3-alpha-sig.figma.com/img/f064/518a/5a4d94aa4716003d2d818c06dbd28de3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pj1ciuSnHxWsfCCves1Loa1gfd5cmZfPqQun~bzrnN8fj0NSQDB8LOY0EGE-hyA-MjPXsYZLOjVbGvfruaWsPLHsD9v75fCUZn~v89rT-9cF7vGZtUlJZR9ruTehWWtgUdzosFLmDCtvwHLr4cGB9hYGgpyTPrDUw3wOxlPfIwxNGxO9G38ONoFQ7JhGsxZnmoDVRakqS10pf65myfLDqGgWuMJ67gbCIojWAFlaVFSSGcUKinCpyaPxDF~GPSdD6L0~NFd-IH9-LZ6wMEsjac3wIzwVpX3IQCw0yXhL9pnKu5VKrguhPuL9MV62vkTYGZXfGuU5EOj8cK~pLKW7Dg__" alt="" />
                    <img className='img-3' src="https://s3-alpha-sig.figma.com/img/1fbb/bcfb/121a1ad2288544525cd6bcd82ffc3612?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qd-tCuuMUpTAXlX6iE58KGkcRUUCFEef2afU4xFRB9FP6vgfA03m83kxM31GXUmm5S1rn~tvfqIyV5wOCKznHB2rP4S~778AsBjEYHOMa7Sd7GfrTSrB9avwOnFpJCIJnFcY2j9TuQL-EaHFlYVfJFu8iE7K5eeeJlEeZkydCrD-LCK-39x7Y8A6mM8Ri~ekdQqJU9X9pxghv9Of7wvx2NGQh6v7na2TJLjhvZ7GNyRy-dMMepS5OEABf5FpgDENJYpwoAeu3sR862YKEf9yMb4QJ7~uFM3kSbC71aho0qgb7QcWnsQDF6d7kYBfB2vLfhkBMO~C6~N~JUYK-FUhXA__" alt="" />
                </div>
                <div className='cats-box2'>
                    <img className='img-4' src="https://s3-alpha-sig.figma.com/img/84dd/1873/8f44a5ea551f1d3f778973c546459769?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GsWImKUdRm3PXjB6Ur9OLQ9ToE2IQZaWsFHjTWJbQLW98WJ3amqI34U8UgP1USBCkTFs18vYw4TkV2RDuacgib5O9dGQ1fADFl5d2NlqwZRLwSmL~hY86Mh~25t7nh34VKWr5wWVCbNVLyEZbGdCo4Z36OnO5dmLt~2gpdSotsF8a-zjUZGa7fmDpGxU3~NpAkCAFufj0e0YcfbQrvKAMNkCpe9m9s7Koypk0oVZxmTr4mhXCBqcmLk2LD0axA~IzPv5hE75v3cIteyZWyTRQGmOxWwRzvneGx-xuEkcAvQAg2f1G-wMk2QB~1xfVsuokAus3FtzemFZ4afCQjpVyw__" alt="" />
                    <img className='img-5' src="https://s3-alpha-sig.figma.com/img/19ba/7a05/2422c19667c1cfe4079e4b6f527354c8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQf5qmQEHcUaAkRN-OQmvqkKYfC8FT58fTD7E85boPzmDyQqYSORn0j2WyCgqwjUlLuS0W5XuD~h6mBirXniU9XZU~5OlMmcTc83ohuGjo93jEC34YFaWizo~pZwTXO-YOQ4bS1jVQek1e6wpzjDWL33PHnEa1lxhzeh19qd9SLMF5MdlWW1G7XuwAoPzAMzbMyC9EmXzx6XjOy4Mxe~qfuEmUkJnKb7qu2UyR1u4zEwo2pLFwz73we0Jj0Kn-ID0OJdrRu3IebQ2jUH6Lj37BZekryS21xreZ1iXYam9m9pdJjJjwcD2S1s9bCKvJTXzH~d6XJ1M8SAGl7q1FSF4w__" alt="" />
                </div>
                <div className='cats-box3'>
                    <img className='img-6' src="https://s3-alpha-sig.figma.com/img/a1f5/93d6/5dc31e9544a51cedcab76bea175d3416?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDiFlI9FAhRJj0Q9SKl8gMmyNIaQ97mILwpOFviJ-lxSXg9SOoWPvlP5Qs5LYYMUKwqTt4s6v0a2E2GEn1x8c35ALnLaW236~WkcCeEclshCvS-weYt9NJoUmC3h1X4nx9hGl9NEwFlIJvbawlHQAoLrRdz-nT2IHRwGgpHjfCYL8UDHaXw7xTbYMCTRlbaxMugMJGdrd2mZZD5npWzgxLd42CkXG8RdQmj5Ul77c13upChZJD9NZtA2OkLwxAUcKbO5Tuv5i8Yeg2sJIZdka8OwDv2rJ05A1PrbKhVlTHXgTtG4bxYnXXbw4z4yUiRBQQ9evIJBNJMTistKgHreVA__" alt="" />
                </div>
                <div className='cats-box4'>
                    <img className='img-7' src="https://s3-alpha-sig.figma.com/img/6abf/6539/666c3c7a1823aec0cd480c39612d4706?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=co6nUU8Y0npMI~o418p9ib5lGr2BMFxqpltY4HFHVIYyCoLeYP-DomJFXAkO5y8dRx~DUIXqRMFJiP9keUcT8f~kSqtyVyJTe~6wqzkJD7foGd8YXZtgG3Ijndv1G2CuAgUmK4un3d5E71Hj0-o9wE18uowsJ0t-VkQ6mjZoYMFhqiVSGFOJyt~2swxaTsLjX3pxceht5VvkGvD4EFrVONKMaMVz94eqBIwfQBoVsCnzNUgxVlzTQ0wqmYCEow7Qep8ptbKWcHlIOKesXsoS7TMFCKtaJSTyOjVLsj0zpqK-B3k0vtgpeFZIOaICdkq56UfENk7YEL4VdC5vKbDeug__" alt="" />
                    <img className='img-8' src="https://s3-alpha-sig.figma.com/img/a5fb/2d0f/5faedfa4e209011efa0c099c91cf02cb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DyNAv7yzNj9aVNO0kwGm6wlyT~o9alr6aAokKk1dZaLy9tonAKCjjGGgrRH08q3267tgIv3mBQsA8nH3FWtY2aWuLwyl--9bnp5mfMvbT7rWWW1YssdA8ePVEj0R~WDXAdT1zTpe34abcU4F9dZrrBuo0CRIOZx6z6Xh6b-z-4OtG6EtCmqMKqWDhTeJfYer-YnMk~t2oKPSG0XD7za64OQOh1hPd57~2nSCkqOBEBX46Rfhrthbkd6T7F2mup~1cl6g-UdQ7LiapR3wAEKnajqnhZKP3hvZbsgSDarEpw0-1N-7bPNPttuS8sfSDOJju9FB93o4pCcIdAjlYApWEg__" alt="" />
                    <img className='img-9' src="https://s3-alpha-sig.figma.com/img/b811/541e/ff5d02b5c153c5282cb719630d1669b3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-ukBQd-ndeKyt~GFrbkLCbodXeq5-BQeUv2o7-Ghtgbx5L9dcoIrpafaUuD6to7kyfJdeGs5nowphEsVCK43rrtIKG-6W1XZKIJok2pLMOXtTa-riybjYcXEgcP731dZEcmG-MOOBpQJ2tk6VhBqfKjuPOM-~VmFT6oW1Iklm1E8jg8AOMiDzZWqfOZFC7B1NtJjTIBhkKQRGVhHStInxsmVyDJXATsSEbS72hkzq26mU4mUU0jy0rRqwflb2IwQ-WevjsWiP6K49eK0OZBRc~RjXP9nVCvawaCJyukcDo5OqAj53CkHQPPvqWaSxmnLe8ebYvcGZX7UHZ4jXRUeg__" alt="" />
                </div>
                <div className='cats-box5'>
                    <img className='img-10' src="https://s3-alpha-sig.figma.com/img/eaba/37b3/06a47db038eed510a5413cf350852528?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aqfasTLMOtmI5IFWxog-XRl5k9ZQW-Y315AdF-qtFEuF~9mO2LOIiMGJa94GU1jboeaivFOZ7h4zFvDM2qkls5bW2175uGajBWuksS2Snwc~b9cDT~FZjYmG0rXUHdownCqwcveLQecIoPYjzx79o2WkRG54TyYfhCrIxaXL3UmEzC8WWIq2q7vZ4Il4hThS9QF~ulNO0MztXdCEd8ezoYOmpNfYBTRmhDJ8dS-bJyiQH06o3vz2mueMsH9StrxueUGTB14PVczGOr305aJMdU4b9M0ZSPoKE8-b3Nkfcfd8pZscw6JnqR-kHoO7qWAtjqa4jCijd4QT3cVEcP9IeQ__" alt="" />
                    <img className='img-11' src="https://s3-alpha-sig.figma.com/img/f5c7/9eb7/c8d5d27038384e13ac8b679d06368f00?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RdQN0hqi4EetgjDwjd9ITzGHb~zdgsPANpPBC7vY9KANQcYlrrPFINacdt97GEB7PhuFtywU1QK~aVCb~xmvq~225AFb1LAEnvJATzS7-aapkhDytzqC4RSqGf99yHItpzf2YOKnnsJqO6z~tQyKgE2BYm1j3U4E3ni59SZNRc9kZk79HiOa9v01zkDE1l-56R8MblUVtQ6M5rcT9tItWESxocT3YCybEekcv8AJLABApWSwJKnsDpwNbH~3vZGug8fIxG5mYZUl95kOz9iplgMFbuykGQe16LwKgXxDTmsSfBQfIockWY615n5~Xo-6UZAzlhp1UWRV8TqS22tpDQ__" alt="" />
                </div>
                <div className='cats-box6'>
                    <img className='img-12' src="https://s3-alpha-sig.figma.com/img/1043/9502/91d3703fd193c03f674b82bb5e3d68f6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iduiJRIq332WRZb6iSL5LcMTOePvOwir0mrcLbLtq7OAU0Q2fjODFguOebo7eUDUsMXVq9l08WiPwstr2bbAAgIvsidTyrLUb8Hb8A6LyIMkZ31rZjMZlDg7fefoZrXwyPK7~SFeBnh1Ikpyp7TSGGlaVS0tLpq1X9LKXnkw1jxsdLGW2jFGo7erN5lURUEzv7VDf7XDL-b1VFaYGDN2Uwd7F5B~Z1z~eqzR80G-lzEfxmdmqSWfvToukgObxzjwPT4ia1XiY4D8pAhdIvYuApYZQNBYL7ec1oYo3y6pkho7hUYJMZws1E91bNrXq14zHBJzDwH0rz1CuSDgLJurbg__" alt="" />
                </div>
            </section>
        </header>
    )
}
export default Header;