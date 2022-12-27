package com.example.springproject.web;


import org.kohsuke.github.*;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class helloGitHub {
    public static String token = "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";

    public static void main(String[] args) throws IOException {
        System.out.println((new Date()).getTime());
        GitHub github = new GitHubBuilder().withOAuthToken(token).build();
        String repo = "hub4j/github-api";
        GHRepository rep = github.getRepository(repo);
        //visgl/deck.gl
        //hub4j/github-api
        //yuk1i/cs305-2022fall-homework1-student
        System.out.println(rep.getName());
        List<GHRepository.Contributor> ContributorList = rep.listContributors().toList();
        int ContributorSize = rep.listContributors().toList().size();
        System.out.println("The Number Of Developer:");
        System.out.println(ContributorSize);
        System.out.println("The Three Developer With The Most Commit Times");
        for(int i = 0;i<3;i++){
            if(i<ContributorList.size()){
                System.out.println(ContributorList.get(i).getLogin());
                System.out.println(ContributorList.get(i).getContributions());
                System.out.println("==============");
            }
        }
        List<GHIssue> OpenedIssues = rep.getIssues(GHIssueState.OPEN);
        System.out.println("Number Of Opened Issues is:");
        System.out.print(OpenedIssues.size());
        List<GHIssue> ClosedIssues = rep.getIssues(GHIssueState.CLOSED);
        System.out.println("Number Of Closed Issues is:");
        System.out.println(ClosedIssues.size());
        long total = 0;
        long totalNumber = 0;

        long MaxDMin = Long.MIN_VALUE;
        long varience = 0;
        long[] times = new long[ClosedIssues.size()];
        int indexOfTimes = 0;
        for(GHIssue ghi : ClosedIssues){
            long differ = ghi.getClosedAt().getTime() - ghi.getCreatedAt().getTime();
            total += differ;
            totalNumber+=1;
            times[indexOfTimes++] = differ;
            if(differ >= MaxDMin){
                MaxDMin = differ;
            }
        }
        long average = total / totalNumber;
        average = average /1000;
        long anotherAver = 0;
        for(int i = 0;i<times.length;i++){
            anotherAver+=times[i];
        }
        long fangchasum = 0;
        for(int i = 0;i<times.length;i++){
            fangchasum += Math.pow(((double)(times[i]/1000) - average),2);
        }
        fangchasum = fangchasum/times.length;
        System.out.println("平均值为:"+average);
        System.out.println("检验数组平均值为："+anotherAver/totalNumber);
        System.out.println("极差为:"+MaxDMin/1000);
        System.out.println("方差为:"+fangchasum);
        List<GHRelease> ListOfRelease = rep.getReleases();
        int NumOfReleases = ListOfRelease.size();
        System.out.println("release的数量为："+NumOfReleases);
        List<GHCommit> ListOfCommit = rep.listCommits().toList();
        int CommitsNum = ListOfCommit.size();
        System.out.println("commit的数量是:"+CommitsNum);
        List<Integer> CommitsBetweenReleases = new ArrayList<>();


        for(int i = ListOfRelease.size()-1;i>=1;i--){
            long ThisTime = ListOfRelease.get(i).getCreatedAt().getTime();
            long NextTime = ListOfRelease.get(i-1).getCreatedAt().getTime();
            int tmp = 0;
            for(int j = 0;j<ListOfCommit.size();j++){
                long CommitTime = ListOfCommit.get(j).getCommitDate().getTime();
                if(CommitTime>=ThisTime && CommitTime<NextTime){
                    tmp++;
                }
            }
            CommitsBetweenReleases.add(tmp);
        }
        for(int i = 0;i<CommitsBetweenReleases.size();i++){
            System.out.println(CommitsBetweenReleases.get(i));
        }
        int[] TimePeriod = new int[5];
        int[] WeekP = new int[2];
        SimpleDateFormat df = new SimpleDateFormat("HH");

        for(int i = 0;i<ListOfCommit.size();i++){
            GHCommit commit = ListOfCommit.get(i);
            Calendar c = Calendar.getInstance();
            c.setTime(commit.getCommitDate());
            int WeekDOrWeekend = c.get(Calendar.DAY_OF_WEEK);
            if(WeekDOrWeekend ==2 ||WeekDOrWeekend ==3 ||WeekDOrWeekend ==4 ||WeekDOrWeekend ==5 ||WeekDOrWeekend ==6 ){
                WeekP[0]++;
            }if(WeekDOrWeekend ==7||WeekDOrWeekend ==1){
                WeekP[1]++;
            }
            String str = df.format(commit.getCommitDate());
            int a = Integer.parseInt(str);
            if (a >= 0 && a <= 6) {
                TimePeriod[0]+=1;
            }
            if (a > 6 && a < 12) {
                TimePeriod[1]+=1;
            }
            if (a >= 12 && a <= 13) {
                TimePeriod[2]+=1;
            }
            if (a > 13 && a <= 18) {
                TimePeriod[3]+=1;
            }
            if (a > 18 && a <= 24) {
                TimePeriod[4]+=1;
            }
        }
        for(int i = 0;i<TimePeriod.length;i++){
            if(i == 0){
                System.out.println("凌晨");
            }if(i == 1){
                System.out.println("上午");
            }if(i == 2){
                System.out.println("中午");
            }if(i == 3){
                System.out.println("下午");
            }if(i == 4){
                System.out.println("晚上");
            }
            System.out.println(TimePeriod[i]);
        }for(int i = 0;i<WeekP.length;i++){
            if (i == 0){
                System.out.println("工作日为");
            }if(i == 1){
                System.out.println("周末为");
            }System.out.println(WeekP[i]);
        }
        StringBuilder string = new StringBuilder();
        string.append("{\n");
        string.append("  \"repo\": \"").append(repo).append("\"").append(",\n");
        string.append("  \"developers\": ").append(ContributorList.size()).append(",\n");
        for(int i = 0;i<3;i++){
            if(i<ContributorList.size()){
            GHRepository.Contributor contributor = ContributorList.get(i);
                string.append("  \"active_contributor").append(i + 1).append("\": {\n");
                string.append("    \"login\": \"").append(contributor.getLogin()).append("\",\n");
                string.append("    \"commits\": ").append(contributor.getContributions()).append(",\n");
                string.append("    \"avatar_url\": \"").append(contributor.getAvatarUrl()).append("\",\n");
                string.append("    \"html_url\": \"").append(contributor.getHtmlUrl()).append("\"\n");
                string.append("  },\n");
            }
        }
        string.append("  \"open_issues\": ").append(OpenedIssues.size()).append(",\n");
        string.append("  \"clos_issues\": ").append(ClosedIssues.size()).append(",\n");
        string.append("  \"average\": ").append(average).append(",\n");
        string.append("  \"max_difference\": ").append(MaxDMin/1000).append(",\n");
        string.append("  \"variance\": ").append(fangchasum).append(",\n");
        string.append("  \"release\": ").append(ListOfRelease.size()).append(",\n");
        for(int i = 0;i<CommitsBetweenReleases.size()-1;i++){
            string.append("  \"Comments").append(i).append("\": {").append("\n");
            string.append("    \"CommentsNum\": ").append(CommitsBetweenReleases.get(i)).append(",\n");
            string.append("    \"BeforeRelease\": ").append("\"").append(ListOfRelease.get(i).getHtmlUrl()).append("\"").append(",\n");
            string.append("    \"AfterRelease\": ").append("\"").append(ListOfRelease.get(i+1).getHtmlUrl()).append("\"").append("\n");
            string.append("  },\n");
        }
        string.append("  \"weekdays\": ").append(WeekP[0]).append(",\n");
        string.append("  \"weekends\": ").append(WeekP[1]).append(",\n");
        string.append("  \"1\": ").append(TimePeriod[0]).append(",\n");
        string.append("  \"2\": ").append(TimePeriod[1]).append(",\n");
        string.append("  \"3\": ").append(TimePeriod[2]).append(",\n");
        string.append("  \"4\": ").append(TimePeriod[3]).append(",\n");
        string.append("  \"5\": ").append(TimePeriod[4]).append("\n");
        string.append("}");

        System.out.println(string.toString());
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("j.json"));
        bufferedWriter.write(string.toString());
        bufferedWriter.close();
    }
}
