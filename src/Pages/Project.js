import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Link, useNavigate } from "react-router-dom";

const Project = () => {
  return (
    <>
      <Header></Header>
      <section className="bg-white pt-20 pb-120" >
        <div className="container mx-auto" style={{marginTop:90}}>
          <div className="row">
            <div className="col-12">
              <div className="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2 mb-10">
                <span className="text-warning text-xl">Portfolio</span>
                <h3 className="section-title text-dark">
                  My recent
                  <span className="position-relative circle-shape portfolio-shape">
                    w
                  </span>
                  ork
                </h3>
              </div>
            </div>
          </div>
          <div className="row g-6">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="overflow-hidden position-relative project-item">
                <img
                  className="w-100 h-100"
                  src="assets/images/portfolios/project1.png"
                  alt="project1"
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <a className="transition-all" href="project-details.html">
                        Oxilex Dashboard design
                      </a>
                    </h4>
                    <a href="project-details.html" className="animate-arrow-up">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="overflow-hidden position-relative project-item">
                <img
                  className="w-100 h-100"
                  src="assets/images/portfolios/project6.png"
                  alt="project1"
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <a className="transition-all" href="project-details.html">
                        Oxilex Dashboard design
                      </a>
                    </h4>
                    <a href="project-details.html" className="animate-arrow-up">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="overflow-hidden position-relative project-item">
                <img
                  className="w-100 h-100"
                  src="assets/images/portfolios/project3.png"
                  alt="project1"
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <a className="transition-all" href="project-details.html">
                        Oxilex Dashboard
                      </a>
                    </h4>
                    <a href="project-details.html" className="animate-arrow-up">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="overflow-hidden position-relative project-item">
                <img
                  className="w-100 h-100"
                  src="assets/images/portfolios/project4.png"
                  alt="project1"
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <a className="transition-all" href="project-details.html">
                        Oxilex Dashboard
                      </a>
                    </h4>
                    <a href="project-details.html" className="animate-arrow-up">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="overflow-hidden position-relative project-item">
                <img
                  className="w-100 h-100"
                  src="assets/images/portfolios/project5.png"
                  alt="project1"
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <a className="transition-all" href="project-details.html">
                        Oxilex Apps
                      </a>
                    </h4>
                    <a href="project-details.html" className="animate-arrow-up">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="overflow-hidden position-relative project-item">
                <img
                  className="w-100 h-100"
                  src="assets/images/portfolios/project6.png"
                  alt="project1"
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <a className="transition-all" href="project-details.html">
                        Oxilex Dashboard
                      </a>
                    </h4>
                    <a href="project-details.html" className="animate-arrow-up">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="overflow-hidden position-relative project-item">
                <img
                  className="w-100 h-100"
                  src="assets/images/portfolios/project7.png"
                  alt="project1"
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap alig-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <a className="transition-all" href="project-details.html">
                        Oxilex Dashboard design
                      </a>
                    </h4>
                    <a href="project-details.html" className="animate-arrow-up">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                          fill="currentColor"
                          fillOpacity="0.9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Project;
