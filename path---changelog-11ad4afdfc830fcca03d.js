webpackJsonp([0xca1d7c158d4b],{489:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{html:'<h3>Reputation on Triage</h3>\n<p>No need to wait for reports to be resolved in order to increase reputation! We now enable hackers to gain reputation whenever their reports are marked as <i>Triaged</i>. </p>\n<h3>Bounty Tables</h3>\n<p>Instead of having programs manually create their own bounty table on the policy page using tedious markdown, we now enable them to easily generate their own bounty table with our new <a href="https://docs.hackerone.com/programs/bounty-tables.html">bounty table</a> tool. </p>',frontmatter:{path:"/changelog/2018/june",title:"June 2018",date:"2018-06"}}},{node:{html:'<h3>Hacker Feedback Dashboard</h3>\n<p>We introduce the new Hacker Feedback Dashboard where private programs can see the total feedback their program has received from hackers along with the reasons they’ve declined to participate in their program. The feedback can be viewed at <b>Dashboard > Feedback</b>. Learn more about the <a href="/programs/hacker-feedback-dashboard.html">feedback dashboard</a>.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-430ef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.0314465408805%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQoz2P4DwMfPnx49+7dp0+fvn79+uPHj1+/fv37/w8i9e8fCGECBjgLqO3Vq1evX79+//7992/ffv758+Dg3i0bdu84evvnr99ABb9+/YaAP2CAovnnz5+fP3/+8f0HUPrv79+rOzf0qViEWAcL2LZEFy148w4o9Q2o4MuXL0B3ARWjaIaAP3//Asllhw/Yeqd0+hVvmL3cJ3chn0lVxYTtQPG/f1FczwA07BMy+PwZKJo0fQJDjP+Gk6eA7FsPX5m51ARGdH798h3sf4R+hj+o4OevX0DR9LnTpRLDL508BGRfPXQ6ite0zDT814+f6JrRnP0P7Ozz1y7e6Cz+P6P+w9JZORre7gxKK5qmA8W/ffsGCTAUzX///gWGASSG/vz+DTT875mD/2c0/OgoKtVwm5ze+OsHMCi/f/n8GagMqB9FM9AwYDDCYxgYKUDX//304f/jux8ePQUHE5aIBgBFr9xWWDrv4QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="may_2018"\n        title=""\n        src="/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-e7ffa.png"\n        srcset="/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-49813.png 125w,\n/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-dc8a5.png 250w,\n/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-e7ffa.png 500w,\n/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-dda24.png 750w,\n/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-c5f18.png 1000w,\n/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-22484.png 1500w,\n/static/may_2018-fdd025fa8ad295e6d5366dd1ae7c84ef-430ef.png 1590w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Triggers</h3>\n<p>We\'ve revamped our <a href="/programs/triggers.html">triggers</a> functionality so that you can: </p>\n<ul>\n<li>Preview matches for a new trigger</li>\n<li>Add <i>And/Or</i> conditionals to make the trigger more flexible</li>\n<li>Edit or build off of default triggers</li>\n</ul>\n<p>We\'ve also updated the design so that you\'ll have a better user experience.</p>\n<h3>Response Targets</h3>\n<p>We’ve deprecated the threatening term, <i>Response SLA</i> and replaced it with the more friendly terms, <i>Response Targets</i> and <i>Response Standards</i>. <a href="/programs/response-targets.html">Learn more about these new terms</a>. </p>\n<p>We’ve deprecated the <i>SLA Violations</i> inbox view and changed the name to <b>Missed targets</b>. The inbox filters are also now <b>Missed response targets</b> and <b>Missed response standards</b> instead of <i>SLA violation reports</i> and <i>SLA Fail reports</i>. </p>\n<p>We introduce 4 new inbox labels for reports that don’t meet response standards or targets. The labels are: Response, Triage, Bounty, and Resolve. These labels replace the previous <i>SLA Fail</i> and <i>SLA Miss</i> labels. </p>\n<p>The fields on the Reponse Target performance section of the Program Health dashboard have changed to <b>On target</b>, <b>Missed target</b>, and <b>Missed standard</b>. The missed target line is also taken off of the Average Time to Resolution graph on the dashboard.</p>\n<h3>Response Efficiency Indicators</h3>\n<p>We’ve modified response efficiency indicators so that:</p>\n<ul>\n<li>They now let you know the program’s percentage of reports that meet response standards instead of the number of reports that are failing or missing SLAs. </li>\n<li>The indicator and metrics are visible even when a member of the program is signed out. </li>\n<li>The orange response efficiency indicator is now changed to yellow.</li>\n<li>The indicator now occurs at the bottom of the metrics chart instead of at the top.</li>\n</ul>\n<h3>Time to Resolution by Severity</h3>\n<p>We now enable you to set your Time to Resolution response standards by severity. Learn more <a href="/programs/setting-response-targets.html">here</a>. </p>\n<h3>Invitations Toggle</h3>\n<p>Programs no longer have the ability to toggle invitations on or off with the On/Off button. The equivalent action to turn invitations off is to set the report volume to 0 if they no longer wish to engage with new hackers. To turn invitations on, just increase the report volume to be greater than 0. </p>\n<h3>Policy and Scope</h3>\n<p>Policy and Scope now have their own separate sections under <b>Settings > Program</b>. </p>\n<h3>Bug Fixes</h3>\n<ul>\n<li>The Managed label no longer shows up on the directory for programs with expired triage subscriptions.</li>\n<li>The response standard percentage now displays when the display option setting is enabled. There were some incidences where it didn’t show in the past. </li>\n<li>When a large user profile photo is uploaded, an error message is now given to the user to notify them that the upload has failed. </li>\n<li>Social sharing icons on public programs are now aligned and work properly without any weird spacing issues between the icons. </li>\n<li>Hackers no longer receive automatic invitations for programs they’ve left. </li>\n</ul>',frontmatter:{path:"/changelog/2018/may",title:"May 2018",date:"2018-05"}}},{node:{html:"<h3>The 90 Day Leaderboard</h3>\n<p>The new rolling 90 day leaderboard ranks hackers based on their score from this calculation: <strong>Reputation x Signal Percentile x Impact Percentile</strong>. </p>\n<h3>Needs More Info</h3>\n<p>When a program member adds a comment to an open report with a question mark, Hackbot will prompt them asking if they want to change the state of the report to Needs more info. </p>\n<h3>Response Efficiency Timers</h3>\n<p>Response efficiency timers no longer trigger for reports submitted by internal members of the program. </p>\n<h3>Auto-Invites for Controlled Programs</h3>\n<p>Programs in controlled launch mode are no longer able to toggle auto-invites as on or off. To change their settings for invitations, they can contact HackerOne support. </p>\n<h3>Bug Fixes</h3>\n<ul>\n<li>URLs in the report title are now wrapped so that they aren’t crossing out of the inbox. </li>\n<li>The Program Health Dashboard now displays 0 instead of N/A when there are no missed or failed reports. </li>\n<li>When a hacker leaves a program that they got invited to through the email forwarding feature, they won’t be placed in the priority queue for leaving that program. This prevents hackers from harvesting a ton of private invitations. </li>\n<li>Hackers now don’t receive invitations to programs they’ve left. </li>\n<li>When hackers received an invitation to claim a report, they couldn’t see or accept the terms of the program. Now they can actually claim the report and see the terms of the program. </li>\n</ul>",frontmatter:{path:"/changelog/2018/april",title:"April 2018",date:"2018-04"}}},{node:{html:'<h3>Invitations</h3>\n<p>We’ve improved the way programs can manage their invitations to hackers. You can now set a report volume target where we’ll monitor and manage your hacker invitations to help you meet your report goal.</p>\n<p>The Invite Hackers tab under Settings > Program > Hacker Management has been renamed to Invitations.  </p>\n<p>The Invitations page includes the new Report Volume field where you can enter the number of reports you\'d like to receive in 30 days.</p>\n<p><a href="/hackers/invitations.html">Read more about Invitations</a>.</p>\n<h3>Needs More Info</h3>\n<p>Reports in the Needs More Info state that haven’t been responded to within 30 days automatically get closed with no negative impact to the hacker’s reputation.</p>\n<h3>Self-Controlled Launch</h3>\n<p>Response Programs in Controlled Launch that meet all of the success criteria are now prompted to publicly launch their own program through following the Setup Guide or through email notification.</p>\n<h3>Response SLA Settings</h3>\n<p>Response SLA settings are now applied to all reports and not just reports created after modification to SLA settings.</p>\n<p>Response SLA settings are also now incorporated into Controlled Launch for Response programs. Programs must’ve received at least 10 reports and invited 100 hackers while maintaining healthy responsive times before launching publicly.</p>\n<h3>Program Health Dashboard</h3>\n<p>The new Program Health Dashboard helps programs track their Response Efficiency Metrics and Response SLA performance. Go to Dashboard > Program Health to view your metrics.</p>\n<h3>Response Efficiency Indicator</h3>\n<p>Programs can now see their response efficiency indicator in their program dropdown. This enables them to see their response efficiency status without having to visit their security page.</p>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Invite notifications don’t show up again for expired, declined, and duplicate invites.</li>\n<li>The questions on the Invitation Rejection Questionnaire and the Leave Program Questionnaire no longer show duplicates.</li>\n<li>The Time to Bounty timer now pauses when a report is closed as either N/A, Duplicate, Informative, or Spam.</li>\n<li>The red response efficiency indicator tooltip now correctly states that the program has failed SLAs instead of missed SLAs.</li>\n</ul>',frontmatter:{path:"/changelog/2018/march",title:"March 2018",date:"2018-03"}}},{node:{html:'<h3>In-Product Notifications for Invites</h3>\n<p>The notifications corner now pings hackers about new invitations.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/feb_2018-07c28737396e4b9ec03396c33a7f922e-bfff7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 393px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.48854961832062%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAB00lEQVQoz4WQ3WvTUBjG8y95oTDKukGVrrYTZTinbsJ2sTsZeOHf461ziVeiE6aToa3NxoqUFJo2aZovm2TpyflI81F6PMlWpzf68OPh5X3fh/PBVVeqtUrtv1QrtbXbK2t3KhuP1jcerq/eXWVNrrRcKhaK/2apULxVWHx5Y+HFzcVyceHB8tK92v1yqcztPd8TeEE4YPB5wfN/IOS8PeD3X++Ln7+854Xd7Z3tp1tbT55tPt7kAACe63Wk7lAzZLnn+4BSOpvNaK7BCFkgsvyJGyT6RYjj1HXd0WjkOq7jOByEIJ74SZz5NAZJNJ4mgBWZXxKDNIcthNjDGIVzcUkE6yfvhDevHOOsJx3/1JqW2rC1pqnWbe27PWgaSkNuf9KVOp1qKVHYYRgTnIuLI9g+Oxa/Hprq6Xnzg9Q6ap8ftcSPLfGwK52EQJ7AXuaBTBM9JRpCASEhycUh6M2SIaXWhf3DUE+Hct1QRb3fULrfjIGYhn3oScBpQ69D40FK1L/CMPAnyIywFSKTFcwJNHBwBetnBdAxGMbEJtBEEF6HAQggwih7Rg4JISKdvtVRbNVw2R7Km5dTtguzMJlfG8Hxlfy5+wCMM677/nw6Zv/0O/wLr8T+5m9Lag0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="feb_2018"\n        title=""\n        src="/static/feb_2018-07c28737396e4b9ec03396c33a7f922e-bfff7.png"\n        srcset="/static/feb_2018-07c28737396e4b9ec03396c33a7f922e-1f72d.png 125w,\n/static/feb_2018-07c28737396e4b9ec03396c33a7f922e-feac1.png 250w,\n/static/feb_2018-07c28737396e4b9ec03396c33a7f922e-bfff7.png 393w"\n        sizes="(max-width: 393px) 100vw, 393px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Invitations on the Program’s Profile</h3>\n<p>Hackers can also see their invitations on the program\'s profile page. This reminds hackers of their invitation when they go to look at the program.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-da44b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.832662912308926%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABuElEQVQoz4WQy27TQBSG/YJsK0HSmpbLBlGegU0ltiCegVUXiIIUGifZkNZCkDp2komt2p6kBHCbiz0znosvw9hAxYLCfz79OqM5/8xotId7+oNd/b6+fU/f3ttp3m029Madf7DTbOxubR082d9//Ejz3Y8eOA28T19mdng+gL41C+1ZMFQ+v5kL6Myhow0GluOMPvT7L5+/aLVaAAB7aDuqhvaZNbyRM4WlGUa72+0Zx+/027eeHTw1T0+M9nGv2+ka7c7/pAVBACH0PLfXed8/McMQBoFfla92wkAta8K/SSuKoixLyijlJM9pWTIpuZS/vVpWFIXI8mpSSqm8qKVhjDChyebi29y8XHzGqxFejdF6jH8xQesJXo9wsohWSHB1ohRCIIQwxhohmBBKkq8octASiBxmOeTYq3EFqRpBXEGjJMFJHKsk51wlCSFVOE3ZJglN8GoM3kSdwyvzLUumFLlUeQLSeMrQRLBos4mvlkuVybLszzBfrn0Lvj73W4v24ff+URoDEgMaT6WANYFgl5QJrqrWdZiohrNUZrwQLJMiKzlniNFEkQnyEzXAmHovV791ffMPoYYrNeoHU94AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="feb_2018_2"\n        title=""\n        src="/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-e7ffa.png"\n        srcset="/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-49813.png 125w,\n/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-dc8a5.png 250w,\n/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-e7ffa.png 500w,\n/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-dda24.png 750w,\n/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-c5f18.png 1000w,\n/static/feb_2018_2-bb866d6218a8784ae14e56fb2d687e0c-da44b.png 1243w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Pending Invitations Page</h3>\n<p>The new Pending Invitations page enables hackers to view all of their pending invites in one place so that they can see all the invitations they need to take action on.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/feb_2018_4-057572956b61d565f6e49eaf64b84b9b-217a0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 40.78947368421053%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAAA2klEQVQY042R3WrDMAyF8/5vs9tBn2PQpdBcrJSONrZkSf5TMtmhF81u+iGbg/CxJHtIuSJHh3S5zT+3hwNa13V5j4GZEdEBmm/2SCzpldjZCdvNOADAaRy3mKZpfRvzD/32bD1svf4/ZBVCCLosxGw17YwIq2ozB5Lj+dLHljswSd6NXDtdaluq1zvGXLKZwbvD54cP8gAxv+q+uBlKbckZBTmZ+HWUizYzUTh9f8WUt6i6x8qW2tIkSWxA1cCxlGrv1h6MJRIR9wgd92TubMKW9y0J4E3YH/0B+AjQitibti0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="feb_2018_4"\n        title=""\n        src="/static/feb_2018_4-057572956b61d565f6e49eaf64b84b9b-e7ffa.png"\n        srcset="/static/feb_2018_4-057572956b61d565f6e49eaf64b84b9b-49813.png 125w,\n/static/feb_2018_4-057572956b61d565f6e49eaf64b84b9b-dc8a5.png 250w,\n/static/feb_2018_4-057572956b61d565f6e49eaf64b84b9b-e7ffa.png 500w,\n/static/feb_2018_4-057572956b61d565f6e49eaf64b84b9b-dda24.png 750w,\n/static/feb_2018_4-057572956b61d565f6e49eaf64b84b9b-217a0.png 988w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Rejection Questionnaire</h3>\n<p>When Hackers reject an invite, they are given the opportunity to fill out a questionnaire to provide HackerOne with feedback on why they decided to reject the program invitation. The questionnaire shows up directly after hackers reject the invitation.</p>\n<h3>Leave Program Button</h3>\n<p>The Leave Program button is updated to be on the sidebar of the program’s security page. Hackers that leave the program also also get an invitation to fill out the rejection questionnaire.</p>\n<h3>Priority Queue</h3>\n<p>Hackers that submit the rejection questionnaire are placed at the top of the queue for the next program invitation they qualify for.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-b642d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 33.35987261146497%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABLklEQVQY04VPQUrDQBTNQaRWBDd6DhcupLYlJuYSghdwoxsv4M4moqIncCHiCUxMQVIRtI1tKpnJTNKZzEymqU5b3bioj8fj//d5/P81y7BM3bSMPVM39IberNUbtcYC1neau1vbh/sHpmFpGGOYoCiG3f6w8xa+dj9iCEGyiChJsjRFGGtcCFkUJcllRgUelWL89R+klIyrnNAYzREZnfgPR/79sXd3Gro27JyBoAUCGwQO6NizYt4q/xK+YJWhU2iC5gOabr7frgc3a8/Xq/5FxXOWZ1x5Oq+6TuWxVXFVa1c9Z8ltbbSvBiTlNCcqTAllnPXiYUSziBJYMCT5D8ciZqSfIWX2UgQEDTP8mRN1MCFkulkJZyxo+4zyQj08+fvhpJxa85FSWZTFb/gbqVFRNdMAco8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="feb_2018_3"\n        title=""\n        src="/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-e7ffa.png"\n        srcset="/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-49813.png 125w,\n/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-dc8a5.png 250w,\n/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-e7ffa.png 500w,\n/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-dda24.png 750w,\n/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-c5f18.png 1000w,\n/static/feb_2018_3-471b03f4e67adc5c0a2fefeae971bc01-b642d.png 1256w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Private Invite Notification</h3>\n<p>The notification to private invites is updated so that it doesn\'t look like a program member invite.</p>\n<h3>Response Efficiency Box</h3>\n<p>The Response Efficiency box is updated on the program security page to show that metrics are averages of the last 90 days.</p>\n<h3>Response Efficiency Indicator</h3>\n<p>There is now a response indicator in the Response Efficiency box of the program\'s security page to show how healthy a program is. The indicators are either green, orange, or red dots.</p>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Hackers are no longer redirected to a deleted program after every login.</li>\n<li>Programs can mark reports as being ineligible for bounty even though a hacker account is disabled.</li>\n<li>The program health alerts are fixed so that you\'re not getting alerted when you have 0 reports failing SLAs.</li>\n<li>Old resolved reports are no longer marked as SLA Fail or SLA Miss.</li>\n</ul>',frontmatter:{path:"/changelog/2018/february",title:"February 2018",date:"2018-02"}}},{node:{html:'<h3>Human Augmented Signal</h3>\n<p>We enable programs to utilize the expertise of HackerOne Security Analysts to review those pesky invalid reports so that programs don’t have to deal with them. Learn more about <a href="/programs/human-augmented-signal.html">Human Augmented Signal</a>. </p>\n<h3>Response SLAs</h3>\n<p>You can now set your response service level agreements (SLAs) for time to first response, time to triage, time to bounty, and time to resolution. What do all these terms mean? Find out <a href="/programs/response-target-metrics.html">here</a>.</p>\n<h3>Response Efficiency Indicator</h3>\n<p>We now display a colored indicator on a program\'s security page to show hackers how responsive a program is to report submissions.  </p>\n<h3>SLA Inbox Labels</h3>\n<p>If you forget which reports aren\'t meeting your response SLAs, we now have <i>SLA Miss</i> and <i>SLA Fail</i> labels as well as a new SLA Violations view in your inbox to show which reports need action. </p>\n<h3>Pausing Report Submissions</h3>\n<p>Want to take a break or need time to catch up on existing reports? Programs can now pause from accepting new report submissions.</p>',frontmatter:{path:"/changelog/2018/january",title:"January 2018",date:"2018-01"}}},{node:{html:"<h3>Inline Image and Attachments on the Security Page</h3>\n<p>We now enable you to attach pictures and other files to your policy. Simply go to your program's <b>Settings > Policy</b> and there will be a field where you can upload your files. We've got a nice giph on ours. <a href=\"https://hackerone.com/security\">Check it out</a>.</p>",frontmatter:{path:"/changelog/2017/november",title:"November 2017",date:"2017-11"}}},{node:{html:"<h3>Controlled Launch for Response Programs</h3>\n<p>We've revamped the on-boarding experience for new response programs by guiding them through a step by step setup process that prepares them for public launch. </p>",frontmatter:{path:"/changelog/2017/october",title:"October 2017",date:"2017-10"}}},{node:{html:"<h3>Report Submission Template</h3>\n<p>What...do...I...write? We've updated the blank report submission form with a template of what a good report write-up should entail. This'll guide hackers on how to write up a good report. </p>",frontmatter:{path:"/changelog/2017/september",title:"September 2017",date:"2017-09"}}},{node:{html:'<h3>Directory Icons and Program Badges</h3>\n<p>The Directory page now includes pink and purple lightning icons to highlight programs that are:</p>\n<ul>\n<li>Fast to respond with a first response in &#x3C;48 hours on average</li>\n<li>Fast to award by giving a bounty &#x3C;14 days after submission</li>\n</ul>\n<p>We also include a <i>Managed</i> badge to identify programs that are managed by HackerOne. </p>\n<h3>Paying out Bounties via the API</h3>\n<p>Organizations now have the ability to payout and suggest bounties and swag using their internal systems via the API. You can view the API documentation for this <a href="https://api.hackerone.com/docs/v1#/reports/bounties">here</a>.</p>\n<h3>Slack Integration 2.0</h3>\n<p>We\'ve revamped our Slack integration so that programs can have:</p>\n<ul>\n<li>Granular notification filtering</li>\n<li>Support for multiple channels</li>\n<li>Notifications when a username is mentioned</li>\n</ul>\n<p>Read our <a href="https://www.hackerone.com/blog/slack-integration-update-2">blog post</a> and learn how to <a href="/programs/slack-integration.html">set up Slack integration</a>.</p>',frontmatter:{path:"/changelog/2017/august",title:"August 2017",date:"2017-08"}}},{node:{html:'<h3>Bank Transfers via CurrencyCloud</h3>\n<p>Hackers can now receive payments through Bank Transfers via CurrencyCloud. This enables them to get paid out in 30 different currencies to almost any country in the world. </p>\n<h3>Scope</h3>\n<p>Programs can now define their scope and the list of assets they want hackers to test. This controls what reports can be submitted and helps to prevent noise. Don’t know what a scope is? Learn more <a href="/programs/defining-scope.html">here</a>.</p>\n<h3>Hacker Reviews</h3>\n<p>Programs now have the ability to review their hackers and to comment on their behavior. Learn more about <a href="/programs/hacker-reviews.html">hacker reviews</a>. </p>\n<h3>Bi-Directional Phabricator Integration</h3>\n<p>We now provide programs with a two-way integration that syncs changes between HackerOne and Phabricator. </p>\n<h3>Hackathon Inbox Filter</h3>\n<p>During hackathon events, programs can now filter reports in their inbox specific to the hackathon so that these reports can be focused on.</p>\n<h3>Onboarding Changes</h3>\n<p>We’ve updated the words programs encounter when they onboard onto our platform to reflect our new product changes. </p>',frontmatter:{path:"/changelog/2017/july",title:"July 2017",date:"2017-07"}}},{node:{html:"<h3>Admin Notification Control</h3>\n<p>Program administrators now  have the ability to enforce notification settings for all members of their program. This ensures that members only receive notifications for the reports they’re subscribed to, instead of being spammed for things that don't apply to them. </p>\n<h3>Automated Daily Coinbase Payouts</h3>\n<p>We’ve automated our daily Coinbase payouts so that we don’t have to manually do the work and all hackers receiving payments through Coinbase will be paid at a consistent time every day at 11pm UTC. </p>",frontmatter:{path:"/changelog/2017/june",title:"June 2017",date:"2017-06"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---changelog-11ad4afdfc830fcca03d.js.map