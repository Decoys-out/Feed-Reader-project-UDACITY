/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    describe('RSS Feeds', function () {

        // To check if the allFeeds variable is defined and has some value
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // To check if all feed object has a defined url
        it("has URL defined and that the URL is not empty", function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        })

        // To check if all feed object has a defined name
        it("has a name defined and that the name is not empty", function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0)
            })
        })
    });


    /* Writing a new test suite named "The menu" */
    describe("The menu", function () {


        // To check if the menu is hidden
        it("is hidden", function () {
            expect($("body").hasClass("menu-hidden")).toBe(true)
        })
        // to check the menu works when clicked
        it("When menu is clicked", function () {
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).not.toBe(true);
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    })
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function () {


        // To check that loadFeed works fine and .entry is not empty
        beforeEach(function (work) {
            loadFeed(0, work);
        })
        it("At least one .entry", function () {
            expect($(".feed .entry").length).toBeGreaterThan(0)
        })
    })

    describe("New feed selection", function () {


        var prevFeed;
        beforeEach(function (content) {
            loadFeed(0, function () {
                // Addressing value to the variable 

                prevFeed = $(".feed").html()
                loadFeed(1, content)
            })
        })
        it("Changes", function () {
            expect($(".feed").html()).not.toBe(prevFeed);
        })
    })
}());