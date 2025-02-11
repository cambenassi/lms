import React, { useEffect, useState } from "react";

import Notification from "./notification";
import NotificationCard from "./NotificationCard";
import ClassDropdown from "./classDropdown";
import CategoryDropDown from "./categoryDropDown";

import {
  AdjustmentsHorizontalIcon,
  Bars4Icon,
  CalendarDaysIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  ExclamationCircleIcon,
  FunnelIcon,
  InboxArrowDownIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  TagIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

export default function Prototype() {
  //sets the JSON into a varible when it has been fetched
  //For all notif
  const [notif, setNotif] = useState();
  //For all notif
  const [curNotif, setCurNotifs] = useState();
  const [uniqueClasses, setClasses] = useState();

  // I believe this is where we should get the unique notifications and replace static data
  useEffect(() => {
    // function to receive unique notifications from the server side
    async function getUniqueNotifications() {
      const dataSlug = {
        requestType: "uniqueNotifications",
        // requestType is the client's request (right now, it is uniqueNotifications which happens when going to home page to notification page)
        // i think could later be replaced by other client's requests such as sorts and filters
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSlug),
      };

      const response = await fetch("http://localhost:8080/api", options);
      const body = await response.json();
      var uniqueNotifications = body.message;

      return uniqueNotifications;
    }

    getUniqueNotifications().then((uniqueNotifications) => {
      setNotif(uniqueNotifications);
      setCurNotifs(uniqueNotifications);

      var unqClasses = [];
      outerLoop: for (var i = 0; i < uniqueNotifications.length; i++) {
        for (var j = 0; j < unqClasses.length; j++) {
          if (uniqueNotifications[i].className == unqClasses[j]) {
            continue outerLoop;
          }
        }
        unqClasses.push(uniqueNotifications[i].className);
      }

      setClasses(unqClasses);
    });
  }, []);

  var i = 0;
  function idGen() {
    i = i + 1;
    return "notifID" + String(i);
  }

  // Function filters by class type
  function classFilter(fClass) {
    var FilteredClasses = [];
    for (var i = 0; i < notif.length; i++) {
      if (notif[i].className == fClass) {
        FilteredClasses.push(notif[i]);
      }
    }
    console.log(FilteredClasses)
    setCurNotifs(FilteredClasses);
  }
  function dateFilter() {
     const sorted = [...notif].sort(function(a,b){
        var _a = a
        var _b = b
        if(_a.dueDate === ""){
          _a.dueDate = "0"
        }
        if(_b.dueDate === ""){
          _b.dueDate = "0"
        }
        return (Date.parse(_a.dueDate) > Date.parse(_b.dueDate) ? 1 : Date.parse(_a.dueDate) < Date.parse(_b.dueDate)? -1 : 0)
      })
      const sortedReversed = sorted.reverse()
      console.log(sortedReversed)
      setCurNotifs(sortedReversed)
  }


  function categoryFilter(cat) {
    // console.log(cat);
    var FilteredClasses = [];
    for (var i = 0; i < notif.length; i++) {
      if (notif[i].category == cat) {
        FilteredClasses.push(notif[i]);
      }
    }
    console.log(FilteredClasses)
    setCurNotifs(FilteredClasses);
  }

  function unreadFilter() {
    var FilteredClasses = [];
    for (var i = 0; i < notif.length; i++) {
      if (notif[i].markAsRead == "Unread") {
        console.log(notif[i])
        FilteredClasses.push(notif[i]);
      }
    }
    console.log(FilteredClasses)
    setCurNotifs(FilteredClasses);
  }

  function clearFilters(){
    setCurNotifs(notif);
  }

  return (
    <>
      <div id="sidebarContainer" className="w-full flex pb-16">
        <div className="w-[15%]">
          <p className="lg:flex justify-center mt-6 hidden text-2xl text-gray-500 font-semibold">
            Notifications
          </p>
          <div
            title="Filter by Class"
            className="mb-[-5px] hover:cursor-pointer flex ml-[0%] justify-center lg:justify-start lg:ml-[10%] mt-6 items-center text-sm text-gray-500"
          >
            {/* <p class="hidden lg:block text-gray-600">Filter By Class</p> */}
            <ClassDropdown classes={uniqueClasses} filterFunc={classFilter} />
          </div>
          <div
            title="Filter By Date"
            className="hover:cursor-pointer flex ml-[0%] justify-center lg:justify-start lg:ml-[10%] mt-4 items-center text-sm text-gray-500"
            onClick={dateFilter}
          >
            <CalendarDaysIcon
              className="mr-1.5 h-7 w-7 flex-shrink-0 text-gray-600"
              aria-hidden="true"
            />
            <button className="hidden lg:block text-gray-600">
              Filter By Date
            </button>
          </div>
          <div
            title="Category"
            className="hover:cursor-pointer flex ml-[0%] justify-center lg:justify-start lg:ml-[10%] mt-4 items-center text-sm text-gray-500"
          >
            <CategoryDropDown filterFunc={categoryFilter}></CategoryDropDown>
          </div>
          <div
            title="Unread"
            className="hover:cursor-pointer flex ml-[0%] justify-center lg:justify-start lg:ml-[10%] mt-2 items-center text-sm text-gray-500"
            onClick={unreadFilter}
          >
            <InboxArrowDownIcon
              className="mr-1.5 h-7 w-7 flex-shrink-0 text-gray-600"
              aria-hidden="true"
            />
            <p className="hidden lg:block text-gray-600">View Unread Only</p>
          </div>
          <div
            title="Search"
            className="hover:cursor-pointer flex ml-[0%] justify-center lg:justify-start lg:ml-[10%] mt-4 items-center text-sm text-gray-500"
          >
            <MagnifyingGlassCircleIcon
              className="mr-1.5 h-7 w-7 flex-shrink-0 text-gray-600"
              aria-hidden="true"
            />
            <p className="hidden lg:block text-gray-600">Search</p>
          </div>
          <div
            title="Clear"
            className="hover:cursor-pointer flex ml-[0%] justify-center lg:justify-start lg:ml-[10%] mt-4 items-center text-sm text-gray-500"
            onClick={clearFilters}
          >
            <XCircleIcon
              className="mr-1.5 h-7 w-7 flex-shrink-0 text-gray-600"
              aria-hidden="true"
            />
            <p className="hidden lg:block text-gray-600">Clear Filters</p>
          </div>
        </div>
        <div id="notificationsContainer" className="w-[85%] h-[100%] overflow-y-scroll">
          {curNotif?.map((e) => (
            <NotificationCard
              key={idGen() + "inner"}
              isNew={e['markAsRead']}
              name={e["header"]}
              _class={e["className"]}
              type={e["category"]}
              due={e["dueDate"]}
              isRead={e["markAsRead"]}
              announcementMsg={e["announcement"]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
