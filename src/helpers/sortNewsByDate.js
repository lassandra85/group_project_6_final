const sortNewsByDate = news => {

    const newNews = [...news];
    newNews.sort((a, b) => {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
    });

  return newNews;
};

export default sortNewsByDate;