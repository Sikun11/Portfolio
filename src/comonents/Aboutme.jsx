import React, { useEffect } from 'react';

const Aboutme = () => {
    // useEffect(() => {
    //     const skilsContent = document.querySelector('.skills-content');
    //     if (skilsContent) {
    //       new Waypoint({
    //         element: skilsContent,
    //         offset: '80%',
    //         handler: function(direction) {
    //           const progressBars = document.querySelectorAll('.progress .progress-bar');
    //           progressBars.forEach((el) => {
    //             el.style.width = el.getAttribute('aria-valuenow') + '%';
    //           });
    //         }
    //       })
    //     }
    //   }, []); // Run the effect only once after initial render
  return (
    <div>
        <section id="about" class="about">
        <div class="container">

            <div class="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>Embarking on a journey fueled by passion and driven by innovation. Learn more about the aspiring software developer behind the code</p>
            </div>

            <div class="row">
            <div class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div class="col-lg-8 d-flex flex-column align-items-stretch">
                <div class="content ps-lg-4 d-flex flex-column justify-content-center">
                <div class="row">
                    <div class="col-lg-6">
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Devabrata Pradhan</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor Of Technology</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-700-847-2827</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Hyderabad , Telangana</span></li>
                    </ul>
                    </div>
                    <div class="col-lg-6">
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>Nationality:</strong> <span>Indian</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>pradhandevabrata@gmail.com</span></li>
                        <li><i class="bi bi-chevron-right"></i> <strong>DOB:</strong> <span>06:01:2002</span></li>
                    </ul>
                    </div>
                </div>
                <p className='text-center'>Highly motivated fresher with a strong foundation in Java, SQL, Oracle, and frontend technologies Eager to kick-start a career as a Java Developer and leverage my technical skills to create robust, efficient, and innovative software solutions. Ready to contribute to the success of dynamic projects and drive continuous improvement in software development.</p>
                </div>
                {/* <!-- End .content--> */}

                <div class="skills-content ps-lg-4">
                <div className='row'>
                    <div className='col-6'>
                        <div class="progress">
                            <span class="skill">Java <i class="val">100%</i></span>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{width:'100%'}}></div>
                            </div>
                        </div>
                        <div class="progress">
                            <span class="skill">J2EE <i class="val">90%</i></span>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="90">
                            <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width:'90%'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                    <div class="progress">
                    <span class="skill">Oracle <i class="val">80%</i></span>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80">
                    <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{width:'80%'}}></div>
                    </div>
                </div>

                <div class="progress">
                    <span class="skill">React js <i class="val">80%</i></span>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80">
                        <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'80%'}}></div>
                        </div>
                </div>
                    </div>
                    <div className='col-6'>
                    <div class="progress">
                    <span class="skill">HTML <i class="val">100%</i></span>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:'100%'}}></div>
                    </div>
                </div>

                <div class="progress">
                    <span class="skill">CSS <i class="val">90%</i></span>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="90">
                    <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{width:'90%'}}></div>
                    </div>
                </div>
                    </div>
                    <div className='col-6'>
                    <div class="progress">
                    <span class="skill">Javascript <i class="val">80%</i></span>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80">
                    <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width:'80%'}}></div>
                    </div>
                </div>

                <div class="progress">
                    <span class="skill">Bootstrap<i class="val">90%</i></span>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="90">
                    <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{width:'90%'}}></div>
                    </div>
                </div>
                    </div>
                </div>
                </div>

            </div>
            </div>

        </div>
        </section>
    </div>
  )
}

export default Aboutme
