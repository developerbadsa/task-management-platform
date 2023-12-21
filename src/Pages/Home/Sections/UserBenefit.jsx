import React from 'react';

const UserBenefit = () => {

      const UserBenefits = [
            {
                  title: 'Developers',
                  desc: 'Effortlessly manage tasks, collaborate with team members, and monitor project progress with dedicated features for developers. Integration capabilities with popular development tools enhance your workflow.',
                  image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg'
            },
            {
                  title: 'Corporate Professionals',
                  desc: 'Organize tasks, schedule meetings, and enhance overall productivity. Seamlessly integrate with existing business tools to create a centralized hub for efficient collaboration.',
                  image: 'https://blog.udemy.com/wp-content/uploads/2014/05/bigstock-Smiling-business-team-standing-38925208.jpg'
            },
            {
                  title: 'Bankers',
                  desc: 'Ensure security and compliance with features tailored to the financial sector. Experience secure task management, compliance tracking, and functionalities specific to banking professionals.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOEJIuTKQOB26NJtQuUo0YDL0TogaXQsY7xzfiWt4s9Aj6Y5_DHZYTna4bYOU5aAKmlU&usqp=CAU'
            }
      ];


      return (
            <section>
                  <h3 className='text-center text-3xl mt-12 my-4 font-semibold'>Who Can Benefit?</h3>
                  <p className='px-44 py-3'>Welcome to our task management platform designed to cater to the diverse needs of professionals across various industries. Discover how our features can be tailored to benefit different types of users.</p>
                  <div className='grid grid-cols-1 justify-center lg:grid-cols-3 md:grid-cols-2 gap-20'>
                        {UserBenefits.map(({title, desc, image}, idx) => {
                              return (
                                    <div key={idx} className="card  bg-base-100 shadow-xl">
                                          <div className="card-body">
                                                <h2 className="card-title mx-auto my-3">{title}</h2>
                                                <p>{desc}</p>
                                          </div>
                                          <figure><img src={image} alt="Shoes" /></figure>
                                    </div>
                              )
                        })}
                  </div>
            </section>
      );
};

export default UserBenefit;