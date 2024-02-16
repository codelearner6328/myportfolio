import React, { useEffect, useState } from "react";
import { servicesData, serviceDescription } from "../DevData";


interface JobType {
  id: number;
  title: string;
  description: string;
  search_text: string;
  qualification: string;
  hide_salary: number;
  req_desc: number;
  min_salary: number;
  max_salary: number;
  vacancies: number;
  requires_traveling: number;
  post_date: string;
  expiry_date: string;
  created: string;
  status: number;
  updated: string;
  email_resume: number;
  posted_by: string;
  gender: string | null;
  telecommute: number;
  posted_type: number;
  job_skills: string;
  job_benefits: string;
  social_image: string | null;
  short_link: string | null;
  newsletter: number;
  job_salaryrange_type: string;
  country: string;
  job_category: string;
  job_career_level: string;
  job_experience_level: string;
  job_type: string;
  job_shift_timing: string;
  currency: string;
  recuriter: string;
  city: string;
}
export default function Services() {
  // function fetchAPI() {
  //   fetch('http://143.42.54.67:8004/api/jobs').then(res => res.json().then((data => {

  //   })).catch(e => {
  //     console.log(e)
  //   }))
  // }


  // State to store the fetched data
  const [jobsData, setJobsData] = useState<JobType[]>([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  // Function to fetch data from the API
  console.log(jobsData);
  const fetchAPI = () => {
    setLoader(true);
    fetch('http://143.42.54.67:8004/api/jobs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setLoader(false);
        // Set the fetched data to state
        setJobsData(data?.data?.data ? data.data.data : []);
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        setError(error.message);
        setLoader(false);
      });

  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchAPI();
  }, []);

  if (loader) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }


  return (
    <section id="services">
      <div className="service container">
        <div className="service-top">
          <h1 className="section-title">
            SERV<span>I</span>CES
          </h1>
          <p style={{ textAlign: "justify" }}>{serviceDescription}</p>
        </div>
        <div className="service-bottom">
          {servicesData.map((item: any) => {
            return (
              <div className="service-item">
                <div className="icon">
                  <img src={item.img} />
                </div>
                <h2 style={{ textAlign: "left" }}>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}

          <div className="service-item">
            <div className="icon">
              <img src="" />
            </div>
            {jobsData && jobsData.map((job, index: number) => (
              <div key={index}>{job?.city ? job.city : ''}</div>
            ))}
            {/* <h2>{jobsData}</h2> */}
            <p>def</p>
          </div>

        </div>
      </div>
    </section>
  );
}
