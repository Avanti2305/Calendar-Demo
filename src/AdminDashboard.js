import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Example for Bootstrap


function AdminDashboard() {
  return (
    <div>
  {/* Layout wrapper */}
  <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
    <div className="layout-container">
      {/* Navbar */}
      <nav
        className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="container-xxl">
          <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-6">
            <a href="index.html" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
                <span style={{ color: "var(--bs-primary)" }}>
                  <svg
                    width={30}
                    height={24}
                    viewBox="0 0 250 196"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.077704"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                      fill="black"
                    />
                    <path
                      opacity="0.077704"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.077704"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                      fill="black"
                    />
                    <path
                      opacity="0.077704"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                      fill="white"
                      fillOpacity="0.15"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  </svg>
                </span>
              </span>
              <span className="app-brand-text demo menu-text fw-semibold ms-1">
                Materio
              </span>
            </a>
            <a
              href="javascript:void(0);"
              className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
            >
              <i className="ri-close-fill align-middle" />
            </a>
          </div>
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0  d-xl-none  ">
            <a
              className="nav-item nav-link px-0 me-xl-6"
              href="javascript:void(0)"
            >
              <i className="ri-menu-fill ri-24px" />
            </a>
          </div>
          <div
            className="navbar-nav-right d-flex align-items-center"
            id="navbar-collapse"
          >
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Search */}
              <li className="nav-item navbar-search-wrapper me-1 me-xl-0">
                <a
                  className="nav-link search-toggler"
                  href="javascript:void(0);"
                >
                  <i className="ri-search-line ri-22px scaleX-n1-rtl me-2" />
                </a>
              </li>
              {/* /Search */}
              {/* Language */}
              <li className="nav-item dropdown-language dropdown">
                <a
                  className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i className="ri-translate-2 ri-22px" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end py-2">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="en"
                      data-text-direction="ltr"
                    >
                      <span className="align-middle">English</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="fr"
                      data-text-direction="ltr"
                    >
                      <span className="align-middle">French</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="ar"
                      data-text-direction="rtl"
                    >
                      <span className="align-middle">Arabic</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-language="de"
                      data-text-direction="ltr"
                    >
                      <span className="align-middle">German</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/*/ Language */}
              {/* Style Switcher */}
              <li className="nav-item dropdown-style-switcher dropdown">
                <a
                  className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i className="ri-22px" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="light"
                    >
                      <span className="align-middle">
                        <i className="ri-sun-line ri-22px me-3" />
                        Light
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="dark"
                    >
                      <span className="align-middle">
                        <i className="ri-moon-clear-line ri-22px me-3" />
                        Dark
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="system"
                    >
                      <span className="align-middle">
                        <i className="ri-computer-line ri-22px me-3" />
                        System
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* / Style Switcher*/}
              {/* Quick links  */}
              <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown">
                <a
                  className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="ri-star-smile-line ri-22px" />
                </a>
                <div className="dropdown-menu dropdown-menu-end py-0">
                  <div className="dropdown-menu-header border-bottom py-50">
                    <div className="dropdown-header d-flex align-items-center py-2">
                      <h6 className="mb-0 me-auto">Shortcuts</h6>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add shortcuts"
                      >
                        <i className="ri-layout-grid-line ri-24px text-heading" />
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-shortcuts-list scrollable-container">
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-calendar-line ri-26px text-heading" />
                        </span>
                        <a href="app-calendar.html" className="stretched-link">
                          Calendar
                        </a>
                        <small>Appointments</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-file-text-line ri-26px text-heading" />
                        </span>
                        <a
                          href="app-invoice-list.html"
                          className="stretched-link"
                        >
                          Invoice App
                        </a>
                        <small>Manage Accounts</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-user-line ri-26px text-heading" />
                        </span>
                        <a href="app-user-list.html" className="stretched-link">
                          User App
                        </a>
                        <small>Manage Users</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-computer-line ri-26px text-heading" />
                        </span>
                        <a
                          href="app-access-roles.html"
                          className="stretched-link"
                        >
                          Role Management
                        </a>
                        <small>Permission</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-pie-chart-2-line ri-26px text-heading" />
                        </span>
                        <a href="index.html" className="stretched-link">
                          Dashboard
                        </a>
                        <small>Analytics</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-settings-4-line ri-26px text-heading" />
                        </span>
                        <a
                          href="pages-account-settings-account.html"
                          className="stretched-link"
                        >
                          Setting
                        </a>
                        <small>Account Settings</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-question-line ri-26px text-heading" />
                        </span>
                        <a href="pages-faq.html" className="stretched-link">
                          FAQs
                        </a>
                        <small className="text-muted mb-0">
                          FAQs &amp; Articles
                        </small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                          <i className="ri-tv-2-line ri-26px text-heading" />
                        </span>
                        <a
                          href="modal-examples.html"
                          className="stretched-link"
                        >
                          Modals
                        </a>
                        <small>Useful Popups</small>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Quick links */}
              {/* Notification */}
              <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1">
                <a
                  className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="ri-notification-2-line ri-22px" />
                  <span className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end py-0">
                  <li className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h6 className="mb-0 me-auto">Notification</h6>
                      <div className="d-flex align-items-center">
                        <span className="badge rounded-pill bg-label-primary me-2">
                          8 New
                        </span>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-text-secondary rounded-pill btn-icon dropdown-notifications-all"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Mark all as read"
                        >
                          <i className="ri-mail-open-line ri-20px text-body" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="../../assets/img/avatars/1.png"
                                alt
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="small mb-1">
                              Congratulation Lettie 🎉
                            </h6>
                            <small className="mb-1 d-block text-body">
                              Won the monthly best seller gold badge
                            </small>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-danger">
                                CF
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">Charles Franklin</h6>
                            <small className="mb-1 d-block text-body">
                              Accepted your connection
                            </small>
                            <small className="text-muted">12hr ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="../../assets/img/avatars/2.png"
                                alt
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">New Message ✉️</h6>
                            <small className="mb-1 d-block text-body">
                              You have new message from Natalie
                            </small>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success">
                                <i className="ri-shopping-cart-2-line" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">
                              Whoo! You have new order 🛒{" "}
                            </h6>
                            <small className="mb-1 d-block text-body">
                              ACME Inc. made new order $1,154
                            </small>
                            <small className="text-muted">1 day ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="../../assets/img/avatars/9.png"
                                alt
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">
                              Application has been approved 🚀{" "}
                            </h6>
                            <small className="mb-1 d-block text-body">
                              Your ABC project application has been approved.
                            </small>
                            <small className="text-muted">2 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-success">
                                <i className="ri-pie-chart-2-line" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">
                              Monthly report is generated
                            </h6>
                            <small className="mb-1 d-block text-body">
                              July monthly financial report is generated{" "}
                            </small>
                            <small className="text-muted">3 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="../../assets/img/avatars/5.png"
                                alt
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">
                              Send connection request
                            </h6>
                            <small className="mb-1 d-block text-body">
                              Peter sent you connection request
                            </small>
                            <small className="text-muted">4 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img
                                src="../../assets/img/avatars/6.png"
                                alt
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">
                              New message from Jane
                            </h6>
                            <small className="mb-1 d-block text-body">
                              Your have new message from Jane
                            </small>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                <i className="ri-error-warning-line" />
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1 small">CPU is running high</h6>
                            <small className="mb-1 d-block text-body">
                              CPU Utilization Percent is currently at 88.63%,
                            </small>
                            <small className="text-muted">5 days ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-read"
                            >
                              <span className="badge badge-dot" />
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-archive"
                            >
                              <span className="ri-close-line" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="border-top">
                    <div className="d-grid p-4">
                      <a
                        className="btn btn-primary btn-sm d-flex"
                        href="javascript:void(0);"
                      >
                        <small className="align-middle">
                          View all notifications
                        </small>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              {/*/ Notification */}
              {/* User */}
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  className="nav-link dropdown-toggle hide-arrow p-0"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar avatar-online">
                    <img
                      src="../../assets/img/avatars/1.png"
                      alt
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-account-settings-account.html"
                    >
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar avatar-online">
                            <img
                              src="../../assets/img/avatars/1.png"
                              alt
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 small">John Doe</h6>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-profile-user.html">
                      <i className="ri-user-3-line ri-22px me-2" />
                      <span className="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-account-settings-account.html"
                    >
                      <i className="ri-settings-4-line ri-22px me-2" />
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="pages-account-settings-billing.html"
                    >
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 ri-file-text-line ri-22px me-2" />
                        <span className="flex-grow-1 align-middle">
                          Billing
                        </span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger h-px-20 d-flex align-items-center justify-content-center">
                          4
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-pricing.html">
                      <i className="ri-money-dollar-circle-line ri-22px me-2" />
                      <span className="align-middle">Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages-faq.html">
                      <i className="ri-question-line ri-22px me-2" />
                      <span className="align-middle">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <div className="d-grid px-4 pt-2 pb-1">
                      <a
                        className="btn btn-danger d-flex"
                        href="auth-login-cover.html"
                        target="_blank"
                      >
                        <small className="align-middle">Logout</small>
                        <i className="ri-logout-box-r-line ms-2 ri-16px" />
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              {/*/ User */}
            </ul>
          </div>
          {/* Search Small Screens */}
          <div className="navbar-search-wrapper search-input-wrapper container-xxl d-none">
            <input
              type="text"
              className="form-control search-input  border-0"
              placeholder="Search..."
              aria-label="Search..."
            />
            <i className="ri-close-fill search-toggler cursor-pointer" />
          </div>
        </div>
      </nav>
      {/* / Navbar */}
      {/* Layout container */}
      <div className="layout-page">
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Menu */}
          <aside
            id="layout-menu"
            className="layout-menu-horizontal menu-horizontal  menu bg-menu-theme flex-grow-0"
          >
            <div className="container-xxl d-flex h-100">
              <ul className="menu-inner">
                {/* Dashboards */}
                <li
                  className="menu-item
     active"
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-home-smile-line" />
                    <div data-i18n="Dashboards">Dashboards</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="dashboards-crm.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-computer-line" />
                        <div data-i18n="CRM">CRM</div>
                      </a>
                    </li>
                    <li className="menu-item active">
                      <a href="index.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-bar-chart-line" />
                        <div data-i18n="Analytics">Analytics</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-ecommerce-dashboard.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons ri-shopping-cart-2-line" />
                        <div data-i18n="eCommerce">eCommerce</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-logistics-dashboard.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons ri-truck-line" />
                        <div data-i18n="Logistics">Logistics</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="app-academy-dashboard.html"
                        className="menu-link"
                      >
                        <i className="menu-icon tf-icons ri-book-open-line" />
                        <div data-i18n="Academy">Academy</div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Layouts */}
                <li
                  className="menu-item
    "
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-layout-2-line" />
                    <div data-i18n="Layouts">Layouts</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="layouts-without-menu.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-layout-4-line" />
                        <div data-i18n="Without menu">Without menu</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="../vertical-menu-template/"
                        className="menu-link"
                        target="_blank"
                      >
                        <i className="menu-icon tf-icons ri-layout-left-line" />
                        <div data-i18n="Vertical">Vertical</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-fluid.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-layout-top-line" />
                        <div data-i18n="Fluid">Fluid</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-container.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-layout-top-2-line" />
                        <div data-i18n="Container">Container</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-blank.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-square-line" />
                        <div data-i18n="Blank">Blank</div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Apps */}
                <li
                  className="menu-item
    "
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-mail-open-line" />
                    <div data-i18n="Apps">Apps</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="app-email.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-mail-line" />
                        <div data-i18n="Email">Email</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-chat.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-message-line" />
                        <div data-i18n="Chat">Chat</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-calendar.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-calendar-line" />
                        <div data-i18n="Calendar">Calendar</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="app-kanban.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-drag-drop-line" />
                        <div data-i18n="Kanban">Kanban</div>
                      </a>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-shopping-cart-2-line" />
                        <div data-i18n="eCommerce">eCommerce</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="app-ecommerce-dashboard.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Dashboard">Dashboard</div>
                          </a>
                        </li>
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Products">Products</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-product-list.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Product List">Product List</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-product-add.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Add Product">Add Product</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-category-list.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Category List">
                                  Category List
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Order">Order</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-order-list.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Order List">Order List</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-order-details.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Order Details">
                                  Order Details
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Customer">Customer</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-customer-all.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="All Customers">
                                  All Customers
                                </div>
                              </a>
                            </li>
                            <li
                              className="menu-item
    "
                            >
                              <a
                                href="javascript:void(0);"
                                className="menu-link menu-toggle"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Customer Details">
                                  Customer Details
                                </div>
                              </a>
                              <ul className="menu-sub">
                                <li className="menu-item">
                                  <a
                                    href="app-ecommerce-customer-details-overview.html"
                                    className="menu-link"
                                  >
                                    <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                    <div data-i18n="Overview">Overview</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a
                                    href="app-ecommerce-customer-details-security.html"
                                    className="menu-link"
                                  >
                                    <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                    <div data-i18n="Security">Security</div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a
                                    href="app-ecommerce-customer-details-billing.html"
                                    className="menu-link"
                                  >
                                    <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                    <div data-i18n="Address & Billing">
                                      Address &amp; Billing
                                    </div>
                                  </a>
                                </li>
                                <li className="menu-item">
                                  <a
                                    href="app-ecommerce-customer-details-notifications.html"
                                    className="menu-link"
                                  >
                                    <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                    <div data-i18n="Notifications">
                                      Notifications
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-ecommerce-manage-reviews.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Manage Reviews">Manage Reviews</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-ecommerce-referral.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Referrals">Referrals</div>
                          </a>
                        </li>
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Settings">Settings</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-settings-detail.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Store Details">
                                  Store Details
                                </div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-settings-payments.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Payments">Payments</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-settings-checkout.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Checkout">Checkout</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-settings-shipping.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Shipping & Delivery">
                                  Shipping &amp; Delivery
                                </div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-settings-locations.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Locations">Locations</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-ecommerce-settings-notifications.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Notifications">
                                  Notifications
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-book-open-line" />
                        <div data-i18n="Academy">Academy</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="app-academy-dashboard.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Dashboard">Dashboard</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-academy-course.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="My Course">My Course</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-academy-course-details.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Course Details">Course Details</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-truck-line" />
                        <div data-i18n="Logistics">Logistics</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="app-logistics-dashboard.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Dashboard">Dashboard</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-logistics-fleet.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Fleet">Fleet</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-article-line" />
                        <div data-i18n="Invoice">Invoice</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a href="app-invoice-list.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="List">List</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-invoice-preview.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Preview">Preview</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="app-invoice-edit.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Edit">Edit</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="app-invoice-add.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Add">Add</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-user-line" />
                        <div data-i18n="Users">Users</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a href="app-user-list.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="List">List</div>
                          </a>
                        </li>
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="View">View</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="app-user-view-account.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Account">Account</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-user-view-security.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Security">Security</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-user-view-billing.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Billing & Plans">
                                  Billing &amp; Plans
                                </div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-user-view-notifications.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Notifications">
                                  Notifications
                                </div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="app-user-view-connections.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Connections">Connections</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-shield-user-line" />
                        <div data-i18n="Roles & Permissions">
                          Roles &amp; Permission
                        </div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a href="app-access-roles.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Roles">Roles</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="app-access-permission.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Permission">Permission</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* Pages */}
                <li
                  className="menu-item
    "
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-article-line" />
                    <div data-i18n="Pages">Pages</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-checkbox-multiple-blank-line" />
                        <div data-i18n="Front Pages">Front Pages</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="../front-pages/landing-page.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Landing">Landing</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="../front-pages/pricing-page.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Pricing">Pricing</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="../front-pages/payment-page.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Payment">Payment</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="../front-pages/checkout-page.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Checkout">Checkout</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="../front-pages/help-center-landing.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Help Center">Help Center</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-account-circle-line" />
                        <div data-i18n="User Profile">User Profile</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="pages-profile-user.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Profile">Profile</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-profile-teams.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Teams">Teams</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-profile-projects.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Projects">Projects</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-profile-connections.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Connections">Connections</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-settings-2-line" />
                        <div data-i18n="Account Settings">Account Settings</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="pages-account-settings-account.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Account">Account</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-account-settings-security.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Security">Security</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-account-settings-billing.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Billing & Plans">
                              Billing &amp; Plans
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-account-settings-notifications.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Notifications">Notifications</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-account-settings-connections.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Connections">Connections</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="pages-faq.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-question-line" />
                        <div data-i18n="FAQ">FAQ</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="pages-pricing.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-money-dollar-circle-line" />
                        <div data-i18n="Pricing">Pricing</div>
                      </a>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-file-line" />
                        <div data-i18n="Misc">Misc</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="pages-misc-error.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Error">Error</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-misc-under-maintenance.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Under Maintenance">
                              Under Maintenance
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-misc-comingsoon.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Coming Soon">Coming Soon</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-misc-not-authorized.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Not Authorized">Not Authorized</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="pages-misc-server-error.html"
                            className="menu-link"
                            target="_blank"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Server Error">Server Error</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-lock-line" />
                        <div data-i18n="Authentications">Authentications</div>
                      </a>
                      <ul className="menu-sub">
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Login">Login</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="auth-login-basic.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Basic">Basic</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="auth-login-cover.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Cover">Cover</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Register">Register</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="auth-register-basic.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Basic">Basic</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="auth-register-cover.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Cover">Cover</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="auth-register-multisteps.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Multi-steps">Multi-steps</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Verify Email">Verify Email</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="auth-verify-email-basic.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Basic">Basic</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="auth-verify-email-cover.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Cover">Cover</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Reset Password">Reset Password</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="auth-reset-password-basic.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Basic">Basic</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="auth-reset-password-cover.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Cover">Cover</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Forgot Password">
                              Forgot Password
                            </div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="auth-forgot-password-basic.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Basic">Basic</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="auth-forgot-password-cover.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Cover">Cover</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Two Steps">Two Steps</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="auth-two-steps-basic.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Basic">Basic</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="auth-two-steps-cover.html"
                                className="menu-link"
                                target="_blank"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Cover">Cover</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-git-commit-line" />
                        <div data-i18n="Wizard Examples">Wizard Examples</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="wizard-ex-checkout.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Checkout">Checkout</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="wizard-ex-property-listing.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Property Listing">
                              Property Listing
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="wizard-ex-create-deal.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Create Deal">Create Deal</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="modal-examples.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-tv-2-line" />
                        <div data-i18n="Modal Examples">Modal Examples</div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Components */}
                <li
                  className="menu-item
    "
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-archive-line" />
                    <div data-i18n="Components">Components</div>
                  </a>
                  <ul className="menu-sub">
                    {/* Cards */}
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-bank-card-2-line" />
                        <div data-i18n="Cards">Cards</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a href="cards-basic.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Basic">Basic</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="cards-advance.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Advance">Advance</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="cards-statistics.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Statistics">Statistics</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="cards-analytics.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Analytics">Analytics</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="cards-gamifications.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Gamifications">Gamifications</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="cards-actions.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Actions">Actions</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* User interface */}
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0)"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-pantone-line" />
                        <div data-i18n="User interface">User interface</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a href="ui-accordion.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Accordion">Accordion</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-alerts.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Alerts">Alerts</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-badges.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Badges">Badges</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-buttons.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Buttons">Buttons</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-carousel.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Carousel">Carousel</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-collapse.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Collapse">Collapse</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-dropdowns.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Dropdowns">Dropdowns</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-footer.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Footer">Footer</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-list-groups.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="List Groups">List Groups</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-modals.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Modals">Modals</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-navbar.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Navbar">Navbar</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-offcanvas.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Offcanvas">Offcanvas</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="ui-pagination-breadcrumbs.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Pagination & Breadcrumbs">
                              Pagination &amp; Breadcrumbs
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-progress.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Progress">Progress</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-spinners.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Spinners">Spinners</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-tabs-pills.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-toasts.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Toasts">Toasts</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="ui-tooltips-popovers.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Tooltips & Popovers">
                              Tooltips &amp; Popovers
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="ui-typography.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Typography">Typography</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Extended components */}
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0)"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-box-3-line" />
                        <div data-i18n="Extended UI">Extended UI</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="extended-ui-avatar.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Avatar">Avatar</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-blockui.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="BlockUI">BlockUI</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-drag-and-drop.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-media-player.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Media Player">Media Player</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-perfect-scrollbar.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Perfect Scrollbar">
                              Perfect Scrollbar
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-star-ratings.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Star Ratings">Star Ratings</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-sweetalert2.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="SweetAlert2">SweetAlert2</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-text-divider.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Text Divider">Text Divider</div>
                          </a>
                        </li>
                        <li
                          className="menu-item
    "
                        >
                          <a
                            href="javascript:void(0);"
                            className="menu-link menu-toggle"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Timeline">Timeline</div>
                          </a>
                          <ul className="menu-sub">
                            <li className="menu-item">
                              <a
                                href="extended-ui-timeline-basic.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Basic">Basic</div>
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                href="extended-ui-timeline-fullscreen.html"
                                className="menu-link"
                              >
                                <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                                <div data-i18n="Fullscreen">Fullscreen</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="extended-ui-tour.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Tour">Tour</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="extended-ui-treeview.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Treeview">Treeview</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="extended-ui-misc.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Miscellaneous">Miscellaneous</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="icons-ri.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-remixicon-line" />
                        <div data-i18n="Icons">Icons</div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Forms */}
                <li
                  className="menu-item
    "
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-pages-line" />
                    <div data-i18n="Forms">Forms</div>
                  </a>
                  <ul className="menu-sub">
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-file-copy-line" />
                        <div data-i18n="Form Elements">Form Elements</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="forms-basic-inputs.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Basic Inputs">Basic Inputs</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="forms-input-groups.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Input groups">Input groups</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="forms-custom-options.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Custom Options">Custom Options</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="forms-editors.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Editors">Editors</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="forms-file-upload.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="File Upload">File Upload</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="forms-pickers.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Pickers">Pickers</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="forms-selects.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Select & Tags">
                              Select &amp; Tags
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="forms-sliders.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Sliders">Sliders</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="forms-switches.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Switches">Switches</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="forms-extras.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Extras">Extras</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-box-3-line" />
                        <div data-i18n="Form Layouts">Form Layouts</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="form-layouts-vertical.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Vertical Form">Vertical Form</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="form-layouts-horizontal.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Horizontal Form">
                              Horizontal Form
                            </div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="form-layouts-sticky.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Sticky Actions">Sticky Actions</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-git-commit-line" />
                        <div data-i18n="Form Wizard">Form Wizard</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="form-wizard-numbered.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Numbered">Numbered</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="form-wizard-icons.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Icons">Icons</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="form-validation.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-checkbox-circle-line" />
                        <div data-i18n="Form Validation">Form Validation</div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Tables */}
                <li
                  className="menu-item
    "
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-table-line" />
                    <div data-i18n="Tables">Tables</div>
                  </a>
                  <ul className="menu-sub">
                    {/* Tables */}
                    <li className="menu-item">
                      <a href="tables-basic.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-layout-grid-line" />
                        <div data-i18n="Tables">Tables</div>
                      </a>
                    </li>
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-grid-line" />
                        <div data-i18n="Datatables">Datatables</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a
                            href="tables-datatables-basic.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Basic">Basic</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="tables-datatables-advanced.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Advanced">Advanced</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            href="tables-datatables-extensions.html"
                            className="menu-link"
                          >
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Extensions">Extensions</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* Charts & Maps */}
                <li
                  className="menu-item
    "
                >
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons ri-computer-line" />
                    <div data-i18n="Charts & Maps">Charts &amp; Maps</div>
                  </a>
                  <ul className="menu-sub">
                    <li
                      className="menu-item
    "
                    >
                      <a
                        href="javascript:void(0);"
                        className="menu-link menu-toggle"
                      >
                        <i className="menu-icon tf-icons ri-bar-chart-2-line" />
                        <div data-i18n="Charts">Charts</div>
                      </a>
                      <ul className="menu-sub">
                        <li className="menu-item">
                          <a href="charts-apex.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="Apex Charts">Apex Charts</div>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="charts-chartjs.html" className="menu-link">
                            <i className="menu-icon tf-icons ri-circle-line px-1_5" />
                            <div data-i18n="ChartJS">ChartJS</div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="maps-leaflet.html" className="menu-link">
                        <i className="menu-icon tf-icons ri-map-2-line" />
                        <div data-i18n="Leaflet Maps">Leaflet Maps</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </aside>
          {/* / Menu */}
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row gy-6">
              {/* Congratulations card */}
              <div className="col-md-12 col-lg-4">
                <div className="card">
                  <div className="card-body text-nowrap">
                    <h5 className="card-title mb-0 flex-wrap text-nowrap">
                      Congratulations Norris! 🎉
                    </h5>
                    <p className="mb-2">Best seller of the month</p>
                    <h4 className="text-primary mb-0">$42.8k</h4>
                    <p className="mb-2">78% of target 🚀</p>
                    <a href="javascript:;" className="btn btn-sm btn-primary">
                      View Sales
                    </a>
                  </div>
                  <img
                    src="../../assets/img/illustrations/trophy.png"
                    className="position-absolute bottom-0 end-0 me-5 mb-5"
                    width={83}
                    alt="view sales"
                  />
                </div>
              </div>
              {/*/ Congratulations card */}
              {/* Transactions */}
              <div className="col-lg-8">
                <div className="card h-100">
                  <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Transactions</h5>
                      <div className="dropdown">
                        <button
                          className="btn text-muted p-0"
                          type="button"
                          id="transactionID"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ri-more-2-line ri-24px" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="transactionID"
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Refresh
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Share
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="small mb-0">
                      <span className="h6 mb-0">Total 48.5% Growth</span> 😎
                      this month
                    </p>
                  </div>
                  <div className="card-body pt-lg-10">
                    <div className="row g-6">
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-primary rounded shadow-xs">
                              <i className="ri-pie-chart-2-line ri-24px" />
                            </div>
                          </div>
                          <div className="ms-3">
                            <p className="mb-0">Sales</p>
                            <h5 className="mb-0">245k</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-success rounded shadow-xs">
                              <i className="ri-group-line ri-24px" />
                            </div>
                          </div>
                          <div className="ms-3">
                            <p className="mb-0">Customers</p>
                            <h5 className="mb-0">12.5k</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-warning rounded shadow-xs">
                              <i className="ri-macbook-line ri-24px" />
                            </div>
                          </div>
                          <div className="ms-3">
                            <p className="mb-0">Product</p>
                            <h5 className="mb-0">1.54k</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-info rounded shadow-xs">
                              <i className="ri-money-dollar-circle-line ri-24px" />
                            </div>
                          </div>
                          <div className="ms-3">
                            <p className="mb-0">Revenue</p>
                            <h5 className="mb-0">$88k</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Transactions */}
              {/* Weekly Overview Chart */}
              <div className="col-xl-4 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-1">Weekly Overview</h5>
                      <div className="dropdown">
                        <button
                          className="btn text-muted p-0"
                          type="button"
                          id="weeklyOverviewDropdown"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ri-more-2-line ri-24px" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="weeklyOverviewDropdown"
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Refresh
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Share
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-lg-2">
                    <div id="weeklyOverviewChart" />
                    <div className="mt-1 mt-md-3">
                      <div className="d-flex align-items-center gap-4">
                        <h4 className="mb-0">45%</h4>
                        <p className="mb-0">
                          Your sales performance is 45% 😎 better compared to
                          last month
                        </p>
                      </div>
                      <div className="d-grid mt-3 mt-md-4">
                        <button className="btn btn-primary" type="button">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Weekly Overview Chart */}
              {/* Total Earnings */}
              <div className="col-xl-4 col-md-6">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Total Earning</h5>
                    <div className="dropdown">
                      <button
                        className="btn text-muted p-0"
                        type="button"
                        id="totalEarnings"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-line ri-24px" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="totalEarnings"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-lg-8">
                    <div className="mb-5 mb-lg-12">
                      <div className="d-flex align-items-center">
                        <h3 className="mb-0">$24,895</h3>
                        <span className="text-success ms-2">
                          <i className="ri-arrow-up-s-line" />
                          <span>10%</span>
                        </span>
                      </div>
                      <p className="mb-0">Compared to $84,325 last year</p>
                    </div>
                    <ul className="p-0 m-0">
                      <li className="d-flex mb-6">
                        <div className="avatar flex-shrink-0 bg-lightest rounded me-3">
                          <img
                            src="../../assets/img/icons/misc/zipcar.png"
                            alt="zipcar"
                          />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Zipcar</h6>
                            <p className="mb-0">Vuejs, React &amp; HTML</p>
                          </div>
                          <div>
                            <h6 className="mb-2">$24,895.65</h6>
                            <div
                              className="progress bg-label-primary"
                              style={{ height: 4 }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "75%" }}
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-6">
                        <div className="avatar flex-shrink-0 bg-lightest rounded me-3">
                          <img
                            src="../../assets/img/icons/misc/bitbank.png"
                            alt="bitbank"
                          />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Bitbank</h6>
                            <p className="mb-0">Sketch, Figma &amp; XD</p>
                          </div>
                          <div>
                            <h6 className="mb-2">$8,6500.20</h6>
                            <div
                              className="progress bg-label-info"
                              style={{ height: 4 }}
                            >
                              <div
                                className="progress-bar bg-info"
                                style={{ width: "75%" }}
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="avatar flex-shrink-0 bg-lightest rounded me-3">
                          <img
                            src="../../assets/img/icons/misc/aviato.png"
                            alt="aviato"
                          />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Aviato</h6>
                            <p className="mb-0">HTML &amp; Angular</p>
                          </div>
                          <div>
                            <h6 className="mb-2">$1,2450.80</h6>
                            <div
                              className="progress bg-label-secondary"
                              style={{ height: 4 }}
                            >
                              <div
                                className="progress-bar bg-secondary"
                                style={{ width: "75%" }}
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Total Earnings */}
              {/* Four Cards */}
              <div className="col-xl-4 col-md-6">
                <div className="row gy-6">
                  {/* Total Profit line chart */}
                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header pb-0">
                        <h4 className="mb-0">$86.4k</h4>
                      </div>
                      <div className="card-body">
                        <div id="totalProfitLineChart" className="mb-3" />
                        <h6 className="text-center mb-0">Total Profit</h6>
                      </div>
                    </div>
                  </div>
                  {/*/ Total Profit line chart */}
                  {/* Total Profit Weekly Project */}
                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="avatar">
                          <div className="avatar-initial bg-secondary rounded-circle shadow-xs">
                            <i className="ri-pie-chart-2-line ri-24px" />
                          </div>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn text-muted p-0"
                            type="button"
                            id="totalProfitID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-line ri-24px" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="totalProfitID"
                          >
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Refresh
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Share
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="mb-1">Total Profit</h6>
                        <div className="d-flex flex-wrap mb-1 align-items-center">
                          <h4 className="mb-0 me-2">$25.6k</h4>
                          <p className="text-success mb-0">+42%</p>
                        </div>
                        <small>Weekly Project</small>
                      </div>
                    </div>
                  </div>
                  {/*/ Total Profit Weekly Project */}
                  {/* New Yearly Project */}
                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="avatar">
                          <div className="avatar-initial bg-primary rounded-circle shadow-xs">
                            <i className="ri-file-word-2-line ri-24px" />
                          </div>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn text-muted p-0"
                            type="button"
                            id="newProjectID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-line ri-24px" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="newProjectID"
                          >
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Refresh
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Share
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="mb-1">New Project</h6>
                        <div className="d-flex flex-wrap mb-1 align-items-center">
                          <h4 className="mb-0 me-2">862</h4>
                          <p className="text-danger mb-0">-18%</p>
                        </div>
                        <small>Yearly Project</small>
                      </div>
                    </div>
                  </div>
                  {/*/ New Yearly Project */}
                  {/* Sessions chart */}
                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header pb-0">
                        <h4 className="mb-0">2,856</h4>
                      </div>
                      <div className="card-body">
                        <div id="sessionsColumnChart" className="mb-3" />
                        <h6 className="text-center mb-0">Sessions</h6>
                      </div>
                    </div>
                  </div>
                  {/*/ Sessions chart */}
                </div>
              </div>
              {/*/ four cards */}
              {/* Performance Chart */}
              <div className="col-xl-4 col-md-6">
                <div className="card h-100">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0">Performance</h5>
                      <div className="dropdown">
                        <button
                          className="btn text-muted p-0"
                          type="button"
                          id="performanceDropdown"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ri-more-2-line ri-24px" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="performanceDropdown"
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Last 28 Days
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Last Month
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Last Year
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="performanceChart" />
                  </div>
                </div>
              </div>
              {/*/ Performance Chart */}
              {/* Deposit / Withdraw */}
              <div className="col-xl-8">
                <div className="card-group">
                  <div className="card mb-0">
                    <div className="card-body card-separator">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                        <h5 className="m-0 me-2">Deposit</h5>
                        <a className="fw-medium" href="javascript:void(0);">
                          View all
                        </a>
                      </div>
                      <div className="deposit-content pt-2">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/payments/gumroad.png"
                                className="img-fluid"
                                alt="gumroad"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Gumroad Account</h6>
                                <p className="mb-0">Sell UI Kit</p>
                              </div>
                              <h6 className="text-success mb-0">+$4,650</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/payments/mastercard-2.png"
                                className="img-fluid"
                                alt="mastercard"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Mastercard</h6>
                                <p className="mb-0">Wallet deposit</p>
                              </div>
                              <h6 className="text-success mb-0">+$92,705</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/payments/stripes.png"
                                className="img-fluid"
                                alt="stripes"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Stripe Account</h6>
                                <p className="mb-0">iOS Application</p>
                              </div>
                              <h6 className="text-success mb-0">+$957</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/payments/american-bank.png"
                                className="img-fluid"
                                alt="american"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">American Bank</h6>
                                <p className="mb-0">Bank Transfer</p>
                              </div>
                              <h6 className="text-success mb-0">+$6,837</h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/payments/citi.png"
                                className="img-fluid"
                                alt="citi"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Bank Account</h6>
                                <p className="mb-0">Wallet deposit</p>
                              </div>
                              <h6 className="text-success mb-0">+$446</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                        <h5 className="m-0 me-2">Withdraw</h5>
                        <a className="fw-medium" href="javascript:void(0);">
                          View all
                        </a>
                      </div>
                      <div className="withdraw-content pt-2">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/brands/google.png"
                                className="img-fluid"
                                alt="google"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Google Adsense</h6>
                                <p className="mb-0">Paypal deposit</p>
                              </div>
                              <h6 className="text-danger mb-0">-$145</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/brands/github.png"
                                className="img-fluid"
                                alt="github"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Github Enterprise</h6>
                                <p className="mb-0">
                                  Security &amp; compliance
                                </p>
                              </div>
                              <h6 className="text-danger mb-0">-$1870</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/brands/slack.png"
                                className="img-fluid"
                                alt="slack"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Upgrade Slack Plan</h6>
                                <p className="mb-0">Debit card deposit</p>
                              </div>
                              <h6 className="text-danger mb-0">$450</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/payments/digital-ocean.png"
                                className="img-fluid"
                                alt="digital"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Digital Ocean</h6>
                                <p className="mb-0">Cloud Hosting</p>
                              </div>
                              <h6 className="text-danger mb-0">-$540</h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-4">
                              <img
                                src="../../assets/img/icons/brands/aws.png"
                                className="img-fluid"
                                alt="aws"
                                height={30}
                                width={30}
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">AWS Account</h6>
                                <p className="mb-0">
                                  Choosing a Cloud Platform
                                </p>
                              </div>
                              <h6 className="text-danger mb-0">-$21</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Deposit / Withdraw */}
              {/* Sales by Countries */}
              <div className="col-xl-4 col-md-6">
                <div className="card h-100">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Sales by Countries</h5>
                    <div className="dropdown">
                      <button
                        className="btn text-muted p-0"
                        type="button"
                        id="saleStatus"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-line ri-24px" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="saleStatus"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-4">
                          <div className="avatar-initial bg-label-success rounded-circle">
                            US
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <h6 className="mb-0">$8,656k</h6>
                            <i className="ri-arrow-up-s-line ri-24px text-success" />
                            <span className="text-success">25.8%</span>
                          </div>
                          <p className="mb-0">United states of america</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-1">894k</h6>
                        <small className="text-muted">Sales</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-4">
                          <span className="avatar-initial bg-label-danger rounded-circle">
                            UK
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <h6 className="mb-0">$2,415k</h6>
                            <i className="ri-arrow-down-s-line ri-24px text-danger" />
                            <span className="text-danger">6.2%</span>
                          </div>
                          <p className="mb-0">United Kingdom</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-1">645k</h6>
                        <small className="text-muted">Sales</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-4">
                          <span className="avatar-initial bg-label-warning rounded-circle">
                            IN
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <h6 className="mb-0">865k</h6>
                            <i className="ri-arrow-up-s-line ri-24px text-success" />
                            <span className="text-success"> 12.4%</span>
                          </div>
                          <p className="mb-0">India</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-1">148k</h6>
                        <small className="text-muted">Sales</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-4">
                          <span className="avatar-initial bg-label-secondary rounded-circle">
                            JA
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <h6 className="mb-0">$745k</h6>
                            <i className="ri-arrow-down-s-line ri-24px text-danger" />
                            <span className="text-danger">11.9%</span>
                          </div>
                          <p className="mb-0">Japan</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-1">86k</h6>
                        <small className="text-muted">Sales</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-4">
                          <span className="avatar-initial bg-label-danger rounded-circle">
                            KO
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <h6 className="mb-0">$45k</h6>
                            <i className="ri-arrow-up-s-line ri-24px text-success" />
                            <span className="text-success">16.2%</span>
                          </div>
                          <p className="mb-0">Korea</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-1">42k</h6>
                        <small className="text-muted">Sales</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center mb-4">
                        <div className="avatar me-4">
                          <span className="avatar-initial bg-label-primary rounded-circle">
                            CH
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <h6 className="mb-0">$12k</h6>
                            <i className="ri-arrow-up-s-line ri-24px text-success" />
                            <span className="text-success">14.8%</span>
                          </div>
                          <p className="mb-0">China</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-1">8k</h6>
                        <small className="text-muted">Sales</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-4">
                          <span className="avatar-initial bg-label-danger rounded-circle">
                            KO
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1 mb-1">
                            <h6 className="mb-0">$95k</h6>
                            <i className="ri-arrow-up-s-line ri-24px text-success" />
                            <span className="text-success">9.2%</span>
                          </div>
                          <p className="mb-0">france</p>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-1">142k</h6>
                        <small className="text-muted">Sales</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Sales by Countries */}
              {/* Data Tables */}
              <div className="col-xl-8 col-md-6">
                <div className="card overflow-hidden">
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th className="text-truncate">User</th>
                          <th className="text-truncate">Email</th>
                          <th className="text-truncate">Role</th>
                          <th className="text-truncate">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Jordan Stevenson
                                </h6>
                                <small className="text-truncate">
                                  @amiccoo
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            susanna.Lind57@gmail.com
                          </td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-vip-crown-line ri-22px text-primary me-2" />
                              <span>Admin</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-warning rounded-pill">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/3.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Benedetto Rossiter
                                </h6>
                                <small className="text-truncate">
                                  @brossiter15
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            estelle.Bailey10@gmail.com
                          </td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-edit-box-line text-warning ri-22px me-2" />
                              <span>Editor</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/2.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bentlee Emblin
                                </h6>
                                <small className="text-truncate">
                                  @bemblinf
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">milo86@hotmail.com</td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-computer-line text-danger ri-22px me-2" />
                              <span>Author</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/5.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bertha Biner
                                </h6>
                                <small className="text-truncate">
                                  @bbinerh
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            lonnie35@hotmail.com
                          </td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-edit-box-line text-warning ri-22px me-2" />
                              <span>Editor</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-warning rounded-pill">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/4.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Beverlie Krabbe
                                </h6>
                                <small className="text-truncate">
                                  @bkrabbe1d
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            ahmad_Collins@yahoo.com
                          </td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-pie-chart-2-line ri-22px text-info me-2" />
                              <span>Maintainer</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/7.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bradan Rosebotham
                                </h6>
                                <small className="text-truncate">
                                  @brosebothamz
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            tillman.Gleason68@hotmail.com
                          </td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-edit-box-line text-warning ri-22px me-2" />
                              <span>Editor</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-warning rounded-pill">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/6.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bree Kilday
                                </h6>
                                <small className="text-truncate">
                                  @bkildayr
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">otho21@gmail.com</td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-user-3-line ri-22px text-success me-2" />
                              <span>Subscriber</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr className="border-transparent">
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-4">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Breena Gallemore
                                </h6>
                                <small className="text-truncate">
                                  @bgallemore6
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            florencio.Little@hotmail.com
                          </td>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <i className="ri-user-3-line ri-22px text-success me-2" />
                              <span>Subscriber</span>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-label-secondary rounded-pill">
                              Inactive
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*/ Data Tables */}
            </div>
          </div>
          {/*/ Content */}
          {/* Footer */}
          <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
              <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                <div className="text-body mb-2 mb-md-0">
                  © , made with{" "}
                  <span className="text-danger">
                    <i className="tf-icons ri-heart-fill" />
                  </span>{" "}
                  by{" "}
                  <a
                    href="https://themeselection.com"
                    target="_blank"
                    className="footer-link"
                  >
                    ThemeSelection
                  </a>
                </div>
                <div className="d-none d-lg-inline-block">
                  <a
                    href="https://themeselection.com/license/"
                    className="footer-link me-4"
                    target="_blank"
                  >
                    License
                  </a>
                  <a
                    href="https://themeselection.com/"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    More Themes
                  </a>
                  <a
                    href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    Documentation
                  </a>
                  <a
                    href="https://themeselection.com/support/"
                    target="_blank"
                    className="footer-link d-none d-sm-inline-block"
                  >
                    Support
                  </a>
                </div>
              </div>
            </div>
          </footer>
          {/* / Footer */}
          <div className="content-backdrop fade" />
        </div>
        {/*/ Content wrapper */}
      </div>
      {/*/ Layout container */}
    </div>
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
  {/* Drag Target Area To SlideIn Menu On Small Screens */}
  <div className="drag-target" />
  {/*/ Layout wrapper */}
  <div className="buy-now">
    <a
      href="https://themeselection.com/item/materio-bootstrap-html-admin-template/"
      target="_blank"
      className="btn btn-danger btn-buy-now"
    >
      Buy Now
    </a>
  </div>
</div>
  )
};

export default AdminDashboard;