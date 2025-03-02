const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ]
  };

  function setCourseInfo(course) {
    document.getElementById('courseName').textContent = course.name;
    document.getElementById('courseCode').textContent = course.code;
  }

  function renderSectionsd(sections) {
    const sectionsTable = document.getElementById('sections');
    sectionsTable.innerHTML = '';

    sections.forEach(section => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        `;
        sectionsTable.appendChild(row);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setCourseInfo(aCourse);
    renderSectionsd(aCourse.sections);
  });