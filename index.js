const getArticleNumberFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('manuscript')
}

function splitTextIntoParagraphs(text) {
  const lines = text.split('\n').filter(Boolean)
  const paragraphs = lines.map(line => `<p>${line.trim()}</p>`)
  return paragraphs.join('\n')
}

const renderImage = (num, fig, alt = '') => {
  return `<img src="./assets/article-${num}/fig${fig}.png" alt="${alt}" /><figcaption>${alt}</figcaption>`
}

const generateOrderedList = items => {
  let ol = '<ol>'
  items.forEach(item => {
    ol += `<li>${item}</li>`
  })
  ol += '</ol>'
  return ol
}

const generateUnorderedList = items => {
  let ul = '<ul>'
  items.forEach(item => {
    ul += `<li>${item}</li>`
  })
  ul += '</ul>'
  return ul
}

const article9Sections = {
  Abstract: /* html */ `
    <p>It is traditionally believed that peer review is the backbone of anacademicjournal and scientific communication, ensuringhigh quality and trust in the published materials. However, peer review only became an institutionalized practice in the second half of the 20th century, although the first scientific journals appeared three centuries earlier. By the beginning of the 21st century, there emerged an opinion that the traditional model of peer review is in deep crisis. This study aims to synthesize thekeycharacteristics, practices, and outcomes of traditional and innovative peer review models in scholarly publishing.The article discusses the evolution of the institution of scientific peer review and the formation of the current crisis. Weanalyzethe modern landscape of innovations in peer review and scientific communication. Based on this analysis, three main peer review models in relation to editorial workfloware identified: pre-publication peer review (traditional model), registered reports,and post-publication (peer)review (including preprints(peer) review). Wearguethatthe third model offers the best way to implementthe main functions of scientific communication.Keywords:scientific communication, academicjournal, peer review, pre-publication peer review, prereview, post-publication review, preprints, registered reports</p>
    `,
  Introduction: /* html */ `
    <p>International journals often require additional assessment of the level of English. However, this is not a comprehensive list, and the list of criteria to be evaluated may vary from journal to journal. Nevertheless, as early as the beginning of the 21st century, it was argued that the system of peer review is "broken" (McCook, 2006). The main problem noted by McCook is the increasing number of manuscripts and the burden on reviewers. However, this is just the tip of the iceberg. Allen et al. (2022) highlighted the issue of the "black box": the anonymity of traditional peer review should maintain honesty and ethical norms, but it also can stifle discussion, generate biases, and reduce the overall effectiveness of peer review. In fact, the function of being the "supreme judge" in deciding what is "good" and "bad" science is taken on by peer review, defending the dominant scientific paradigm and stifling the emergence of new ideas that always arise on the periphery. However, as academician L.I. Abalkin once remarked, "no one has the right to usurp the truth" (Sukharev, 2020, p. 44). If we do not change our approach, science will either stagnate or transition into other forms of communication. Moreover, the current system has become an "exploitation machine": publishers benefit in most cases, while reviewers work voluntarily. There is a point of view that peer review is included in the implicit contract of the researcher. Nevertheless, given that most of the research and, accordingly, research positions are funded from public funds, we nonetheless observe a tendency to "reap where they did not sow." R. Smith (2006) strongly criticized the review while at the same time comparing it to democracy: "a system full of problems but the least worst we have" (p. 178). Is this really the case? And can we talk about peer review as a uniform concept, given the variety of existing models? This study aims to synthesize the key characteristics, practices, and outcomes of traditional and innovative peer review models in scholarly publishing. In the following section, we will attempt to demonstrate how the traditional peer review model has developed and how it has come to the current crisis. Furthermore, we will discuss possible ways to overcome the crisis and how the institution of peer review is evolving in the context of global changes in scientific publishing. A separate section discusses modular publishing, which incorporates various innovations in the publishing process, and in particular, the review process. The scope of this piece is limited to peer review in the context of the publication of scientific articles, but its findings are quite applicable to the publication of books or conference proceedings. At the same time, review for other purposes, e.g., evaluation of grant applications, is a topic for a separate discussion</p>
    `,
  'Evolution and crisis of peer review': /* html */ `
    <p>The practice of prepublication peer review as we understand it today emerged much later than the founding of first academic journals. E.g., Journal des Sçavans, which was published from 1665 and is considered the first academic journal, printed a warning on the first page “We aim to report the ideas of others without guaranteeing them” (Rennie, 1999, p. 2).</p>

<p>However, Kronick (1990) argued that peer review as feedback from peers, in the broad sense of the word, existed as soon as scientists began to exchange research results. Peer review emerged in the form of letters, reviews, and comments that appeared after publication (usually in the case of books).</p>

<p>A narrower understanding of peer review, as an evaluation of scientific work by peers before publication (prereview), first appeared in 1731 in the first issue of Medical Essays and Observations, published by the Royal Society of Edinburgh.</p>
<p>In 1752, the Royal Society of
London took responsibility for publication of Philosophical Transactions and established the
"Committee on Papers." The review process was conducted by the members of the Royal Society
with the highest expertise in the topics under consideration. In the late 1890s, the printed peer
review report was introduced as a supplement to invitation letter (Fyfe, 2019).
Despite the emergence of pre-publication peer review in the 18th century, it remained a noninstitutionalized practice for a long time. In many journals, peer review was not conducted, and
the decision on publication was mainly made by the editor. From this point of view, academic
journals of the 17th-19th centuries more closely resembled modern newspapers or popular
magazines. Peer review became a standard practice only after World War II (Chapelle, 2014).
E.g., the well-known British medical journal The Lancet introduced the practice of obligatory
peer review in 1976. The rapidly increasing flow of manuscripts played a key role in the
institutionalization of peer review, prompting journals to conduct an "entry filtration" of content.
Thus, by the second half of the 20th century, the traditional model of pre-publication peer review
had been definitively established (Fig. 1).</p>
${renderImage(
  9,
  1,
  'Figure 1: Evolution of peer review models in scientific communication',
)}
<p>The institutionalization of peer review is manifested in the development of ethical principles
which have been adopted by the majority of the academic community. One of the most wellknown documents, Ethical Guidelines for Peer Reviewers (2013), was developed by the
Committee on Publication Ethics (COPE). This document contains basic principles for
reviewers, which have become common practice in the workflow of academic publishers
worldwide. Furthermore, most academic journals have a section on their websites that describes
the peer review policy applied by the journal.
Despite the progress in editorial policies, which we observe in the formalization of requirements
for the peer review process, opinions have been expressed since the end of the 20th century
about a crisis in peer review as an institution. In the Introduction, we have already mentioned</p>
<p>
some of the existing issues, and now we will consider them in more detail. In particular, the
following issues can be highlighted:
</p>
${generateOrderedList([
  'The rapidly growing volume of manuscripts, coupled with an increasing workload for researchers and faculty, leads to a shortage of reviewers. The primary reason for declining to review is the simple lack of time (Tite & Schroter, 2007; Willis, 2016). This issue causes extension of review periods and frustration of authors.',
  'The shortage of reviewers forces journals to expand their search. Sometimes, this results in manuscripts being reviewed by researchers who do not possess sufficient expertise in the subject. Several studies have noted a low level of consensus among reviewers (Bornmann, 2011), leading some research to refer to peer review as a “game of chance” (Neff & Olden, 2006). The low level of peer review also contributes to the crisis of reproducibility in scientific research (Stoddart, 2016). Although this crisis is due to a multitude of factors, the peer review system bears a significant responsibility for it.',
  "The current peer review system exacerbates inequality in science. Bias often hides behind anonymity, creating a 'black box' problem. Despite constant calls for equality and inclusivity in science (COPE, 2021), a few groups still dominate scientific periodicals, such as male authors from the United States and the United Kingdom. O. M. Smith et al. (2023) analyzed 300,000 manuscripts in biological sciences and concluded that authors from historically excluded communities face worse outcomes in peer review, and journal efforts to eliminate reviewer bias have not yet been successful. Nevertheless, we must recognize the debatable nature of this issue. For instance, Squazzoni et al. (2021) found no systematic bias against manuscripts submitted by women in the peer review process, with some evidence of favorable treatment for women in certain fields. Walker et al. (2015) found that the gender of the author and the characteristics of the author's institution had a significant impact on the review outcomes. However, it is impossible to determine whether this was due to objective differences in scientific merit or to biases.",
  'Continuing from point 3, peer review is also often seen to protect widely accepted approaches and concepts to the detriment of novelty. Peer review can inadvertently stifle innovation and radical new ideas (Steinhauser et al., 2012). The process tends to favor established concepts and discourage the publication of unusual or disparate discoveries (Hess, 1975). As a result, it may limit opportunities for game-changing scientific discoveries (Braben & Dowler, 2017). The neoclassical school in economics may be seen as an example of this phenomenon. The crisis of the neoclassical school began in the early 21st century (Williams & McNeill, 2005), partly due to the inability to explain the global financial crisis of 2008 (Keen, 2015). However, a paradigm shift has still not occurred - the neoclassical school still occupies a central position in the economic science (and the policies of many countries).',
  'Finally, the current form of peer review is simply inefficient. On the one hand, long peer review slows down the process of disseminating new knowledge (see point 1), and on the other hand, often a large number of reviews are required for a single article. The reason for this is that when authors receive a rejection from one journal, they often submit the same article to another journal, starting the entire process anew. Aczel et al. (2021) found that in 2021, reviewers worldwide spent over 100 million hours, equivalent to more than 15,000 years. If we evaluate this time in terms of money, the cost for reviewers in the USA amounted to over $1.5 billion, in China over $600 million, and in the UK around $400 million. Therefore, peer review is a quite costly activity, and currently, doubts arise regarding the efficiency of its utilization.',
])}
    `,
  'Innovations in peer review': /* html */ `
    <p>We have demonstrated the current crisis of the traditional peer review model. In this regard, the
question arises about the possible ways to overcome the crisis. Recently, a lot of literature has
been published on innovations in the field of peer review (see reviews by Kaltenbrunner et al.,
2022; Woods et al., 2022). Waltman et al. (2023) classified innovations in peer review into four
"schools of thought." We propose adding a parameter to this typology that will characterize
innovations relative to the currently dominant publication workflow (incremental / radical). It
enables creation of a two-factor matrix (Table 1).</p>
${renderImage(
  9,
  2,
  'Source: compiled by the author based on Waltman et al. (2023).',
)}
<p>We should acknowledge that the above-mentioned innovations can simultaneously be placed in different groups. For example, registered reports not only aim to improve the quality of peer review, but also aim to contribute to its efficiency. Now, let's consider each of the directions in detail.</p>
<h4>3.1. Quality and reproducibility</h4>
<p>Training of reviewers through seminars and online courses is part of the strategies of many
publishers3
. At the same time, we have not been able to find statistical data or research to assess
the effectiveness of such training. Software for automatic evaluation of scientific papers based on artificial intelligence (AI) has emerged relatively recently (StatReviewer4
, UNSILO5
)
6
. We can
also allocate here the package for checking statistical analysis statcheck7
. Currently, these are just
auxiliary tools that cannot replace human labor (Baker, 2015; Heaven, 2018), but considering the
pace of development of generative AI technologies, these tools have a great future. The
increasing role of data in scientific research has led some publishers to recognize the need for
review of datasets (e.g., PLOS (A Reviewer’s Quick Guide to Assessing Open Datasets, n.d.).
This also applies to review of code in research papers8
.
We have identified registered reports as a radical innovation because it changes the view of the
publication workflow and the object of peer review (Registered Reports: Peer Review before
Results Are Known to Align Scientific Values and Practices., n.d.). Registered reports are a
special type of empirical publication that reflects a hypothetico-deductive approach in science
(Fig. 2). Studies are registered and undergo the first stage of review at the early stages of
research process. In this case, the research question and methodological approach are evaluated
directly. If the peer review results are positive, the study is provisionally accepted for
publication, after which data collection, analysis, and interpretation are carried out. These steps
are followed by the second stage of peer review, during which the conducted study is compared
to the previously registered methodological approach (study protocol).</p>
${renderImage(
  9,
  3,
  'Figure 2: Registered reports - publication workflow (Model 2).',
)}
<p>It should be noted that most initiatives aimed at improving the quality of peer review
simultaneously increase the costs.</p>

<h4>3.2. Democracy and transparency</h4>
<p>The approach to peer review in which only the rigor and soundness of the methodology are
reviewed (as applied, for example, in PLOS ONE and Scientific Reports) somewhat resembles
registered reports, with the difference that the review is conducted in a single stage. This
preserves the traditional publication workflow but changes the object of review. The key
motivation in this case is that the broader academic community will be better able to assess the
significance and contribution of the study than just editor and peer reviewers (Spezi et al., 2017).
The next level of "openness" is open peer review, where the reviews are available to readers
along with the published article (biomedical journals such as BMJ and BMC were pioneers in adopting this innovation). Wolfram et al. (2020) identified 617 journals that published at least
one article with open identities or open peer review reports as of 2019. Though a steady growth
of open peer review adoption has been observed recently, publishers have implemented this
practice in different ways, resulting in different levels of transparency. Another issue is that in the
case of rejection, only authors see the reviews.
Post-publication review, which is most often implemented in the form of open review of
preprints, can be considered the most transparent approach. This approach radically changes the
essence of peer review. It is no longer a tool for deciding whether to publish a paper or not, but
rather a platform for discussion. Publication is no longer the final stage of work; it becomes its
starting point. Platforms such as eLife9
, Peer Community in10, and F1000Research11 use a model
called “Publish-Review-Curate” (PRC). The MetaROR project using this model of review is
expected to launch this year (Kaltenbrunner et al., 2023). The PRC model is shown in Fig. 3. It is
important to note that for each specific case it will be slightly different. E.g., in the case of
MetaROR, the publication is initially hosted on preprint servers such as arXiv, MetaArXiv,
SocArXiv, bioRxiv, or OSF Preprints.</p>
${renderImage(9, 4)}
${renderImage(
  9,
  5,
  'Figure 3: “Publish-Review-Curate” model (Model 3). Model 3a involves uploading the manuscript directly to a platform (e.g., F1000Research). Model 3b, on the other hand, involves initially posting a preprint on a preprint server followed by peer review on a peer review platform (e.g., eLife and Peer Community in).',
)}
<p>In addition to the projects mentioned, there are other platforms, for example, PREreview12
,
which departs even more radically from the traditional review format due to the decentralized
structure of work.</p>

<h4>3.3. Equity and inclusion</h4>
<p>
    The principles of equity and inclusion, as well as the inappropriateness of biases of different origins (geographic, gender, ethnicity), are reflected in numerous recommendations (e.g., COPE, 2021; Royal Society of Chemistry, 2020) and policies of most major academic publishers. However, as mentioned above, the results of implementing these policies are still far from successful, and perhaps these processes require more time. Double-blind peer review is intended to protect the identity of the author and thereby prevent bias in the review. This practice has been used for quite a time in the social sciences and humanities (Horbach & Halffman, 2020; Karhulahti & Backe, 2021). However, anonymity is very conditional - there are still many “keys” left in the manuscript, by which one can determine, if not the identity of the author, then his country, research group, or affiliated organization. On the other hand, the reviewer's identity is much more securely protected. This issue is especially evident in localized communities: in Russia we often encounter deliberately positive or deliberately negative reviews (Sukharev, 2020). The same is true in specialized fields where reviewers may have conflicts of interest (Rühli et al., 2009). Thus, “closeness” is not a good way to address biases.
</p>

<h4>3.4. Efficiency and incentives</h4>
<p>
    Any work requires not only an internal motive, but also external incentives. Peer review, as one of the key activities in science, requires appropriate recognition. This practice is implemented in the form of certificates of recognition from academic publishers, as well as records reflected in the profiles of researchers on various platforms (Web of Science, ORCID). Unfortunately, at the moment, peer review is practically not taken into account in the systems of reward and recognition of researchers and faculty adopted at universities and at the national level. Note that open review increases the visibility of reviewers' work, which should potentially affect recognition. As mentioned, traditional peer review faces efficiency issues. This is largely due to the fact that the same article, having been rejected in one journal, is submitted to another, where peer review process begins from scratch. One way to solve this problem would be to transfer reviews between journals, also known as “portable peer review.” At the moment, this model is used by large publishing houses (manuscript transfer to another journal of the same publishing house). There are also consortia of journals, such as the Neuroscience Peer Review Consortium (Saper et al., 2009), as well as Manuscript Exchange Common Approach (MECA), an initiative that supports the exchange of manuscripts and reviews between journals and platforms, including preprint servers (NISO RP-30-2023, Manuscript Exchange Common Approach (MECA) (Version 2.0.1), 2023). Although review exchange reduces peer review costs, it doesn’t significantly change the editorial workflow; thus, it is simply an add-on to Model 1 (the traditional model). The idea of exchanging reviews has evolved into journal-independent peer review. The Reviewer Commons, a consortium of 23 life sciences journals, brought this idea into practice. A manuscript is published on a preprint server and undergoes independent review, following which the author can revise the paper and submit it to one of the consortium members. Improving the quality of peer review is achieved by ensuring that reviewers focus on the manuscript itself,
rather than the question whether it fits a particular journal. However, we believe that journalindependent peer review is a special case of Model 3 (“Publish-Review-Curate”).
</p>
    `,
  'Modular Publishing': /* html */ `
    <p>Strictly speaking, modular publishing is primarily an innovative approach for the publishing
workflow in general rather than specifically for peer review. This approach allows for a more
detailed and in-depth exploration of the research process. Besides, modular publishing, which is
a type of deconstructed publication14, combines different models of peer review. This is why we
have placed this innovation in a separate category. Nevertheless, modular publications can
potentially have a significant impact on peer review practices. Modular publication platforms are
like preprint servers, except that they publish not an entire manuscript, but individual significant
fragments of it (hypotheses, methodologies, datasets, program code, etc.). These items
essentially represent the different stages of a research process. This approach could potentially
allow for feedback on each stage completed.
The most well-known initiatives at the moment are ResearchEquals15 and Octopus16
.
ResearchEquals allows to upload 37 research modules, one of which is "Other". There is a
separate "Review" item. The research modules can be uploaded in any order. Octopus assumes
uploading eight research elements in a certain sequence (one of which is peer review), which is
more consistent with empirical research. Thus, both platforms offer open post-publication
review. Octopus assumes the possibility of revising previously published modules; in
ResearchEquals, there is no possibility of versioning. Based on this, we can conclude that the
review in the modular publishing resembles Model 3, while the idea itself may be seen as an
extension of Model 2. Currently, some of the features are not being implemented due to the
technical limitations of the platforms.
A related initiative is currently being developed by the Centre for Open Science, which plans to
launch a new approach to scientific communication called Lifecycle Journals (Lifecycle
Journals, n.d.). These journals will combine the idea of modular publishing with features such as
post-publication peer review and registered reports. Although the initiative is currently in the
planning stage, it seems promising.</p>
    `,
  'Discussion and Conclusion': /* html */ `
    <p>In the previous sections, we briefly examined the evolution of the peer review and its current
crisis in relation to scientific communication. Next, we explored the main innovations in peer
review, which can be classified according to the course of proposed changes and the degree of
influence on the editorial workflow, incremental and radical. As a result, we can conclude that, at
present, there are three major models of peer review and related editorial workflow:</p>
${generateUnorderedList([
  'Model 1: traditional model (pre-publication peer review),',
  'Model 2: registered reports,',
  'Model 3: “Publish-Review-Curate” (post-publication review).',
])}
<p>Table 2 presents comparative characteristics of these models.</p>
<p>Table 2 – Comparative analysis of the three review models in terms of editorial workflow</p>
${renderImage(9, 6)}
<p>We can also compare the three models in terms of the main functions of science communication</p>
<>(Table 3). The four main functions of scientific communication are registration, dissemination,
certification and archiving (Roosendaal & Geurts, 1997; Taubert, 2017).</p>
<p>Table 3 - Comparative analysis of the three models of review in terms of functions of scientific communication</p>
${renderImage(9, 7)}
${renderImage(9, 8, '* Preprint is optional for Models 1 and 2.')}
<p>Thus, in Model 3, all functions of scientific communication are implemented most quickly and
transparently. The additional costs arising from the independent assessment of information based
on open reviews are more than compensated by the emerging opportunities for scientific
pluralism. Model 3 corresponds to the vision of the International Science Council (ISC) on
"more efficient and effective modes of peer review that are inspired by open norms"
(International Science Council, 2023, p. 12).
The traditional publication process model with a “black box” peer review inside is increasingly
proving its inadequacy. Registered reports are promising but are exclusively focused on
empirical research. The "Publish-Review-Curate" model is universal that we expect to be the
future of scientific publishing. The transition will not happen today or tomorrow, but in the next
5-10 years, the number of projects such as eLife, F1000Research, Peer Community in, or
MetaROR will rapidly increase. We should also note that the constructive elements of Model 3
can be transferred to Model 2 (in terms of openness of the review process, especially on the first
stage).</p>
<p>At the same time, we must recognize the complexity of institutional change. The possibilities for
normative regulation here are quite limited - much depends on the traditions embedded in the
academic community, and it will take a lot of time to change them. Openness is a complex
process that requires three conditions:</p>
${generateOrderedList([
  'Group of people willing to take responsibility for the quality of scientific communication in this academic community,',
  'Authors and reviewers willing to accept this practice,',
  'Appropriate infrastructure.',
])}
<p>Avissar-Whiting et al. (2024) provided a useful toolbox of recommendations for all parties
potentially involved in the preprint review process.
A significant development was the announcement by the Bill & Melinda Gates Foundation of its
new Open Access Policy (Brembs & Drury, 2024). The foundation has discontinued Article
Processing Charges (APCs) and introduced a mandatory requirement for grantees to publish
preprints. In addition, the foundation is supporting the development of an open infrastructure for
preprinting. Later, it was announced that the foundation would be launching a new verified
preprint platform in collaboration with F1000Research (“Gates Foundation Collaborates with
F1000 to Launch Verified Preprint Platform,” 2024). This is another step towards normalizing
post-publication reviews, while the publication of preprints is increasingly becoming the norm
(Drury, 2022).
Post-publication review is a return to the roots of scientific communication. This model will
allow all actors involved to take greater responsibility for their work, authors for their articles,
reviewers for their assessments, and editors for supporting the process of scientific
communication. This is the atmosphere of scientific discussion that we need very much.
However, it is important to acknowledge that current peer review practices vary significantly
across fields. While pre-publication peer review is prevalent in almost all fields, there are
numerous variations in terms of its openness or anonymity. Additionally, while some fields have
successfully incorporated innovations, others continue to resist. E.g., preprint publishing has
been an essential form of publication in physics since 1990s (Ginsparg, 2011), and open peer
review was introduced in biomedical journals prior to other domains (e.g., BMJ and BMC). At
the same time, the social sciences and humanities (SSH), in terms of their peer review and
publication process, remain relatively closed (Ross-Hellauer & Horbach, 2024).
We should also acknowledge that the list of innovations in peer review presented in this paper is
not comprehensive. For instance, we could mention ranking papers instead of reviewing them or
bidding for papers (Birukou et al., 2011). However, these initiatives are not yet widely adopted,
so they do not significantly affect the publishing landscape</p>

<h5>Acknowledgements</h5>
<p>
    The author gratefully acknowledges the peers’ contributions. Ludo Waltman and Wolfgang Kaltenbrunner reviewed draft versions of this paper and provided valuable suggestions for improvement.
</p>

<h5>Competing interests</h5>
<p>
    The author is affiliated with the Centre for Science and Technology Studies of Leiden University, which is involved in the development of the MetaROR project.
</p>

<h5>Contributions</h5>
<p>
    Visualization: DK<br>
    Writing – original draft: DK
</p>

<h5>Data availability statement</h5>
<p>
    Data sharing is not applicable to this article as no new data were created in this study.
</p>
    `,
  References: /* html */ `
<div class="references">
<p>
    A Reviewer’s Quick Guide to Assessing Open Datasets. (n.d.). PLOS. Retrieved January 23, 2024, from https://plos.org/resource/peer-reviewing-data/
</p>
<p>
    Aczel, B., Szaszi, B. & Holcombe, A. O. (2021). A billion-dollar donation: estimating the cost of researchers’ time spent on peer review. Research Integrity and Peer Review, 6(1), 14. https://doi.org/10.1186/s41073-021-00118-2
</p>
<p>
    Allen, K., Reardon, J., Lu, Y., Smith, D. V., Rainsford, E. & Walsh, L. (2022). Towards improving peer review: Crowd-sourced insights from Twitter. Journal of University Teaching & Learning Practice, 19(3). https://ro.uow.edu.au/jutlp/vol19/iss3/02
</p>
<p>
    Avissar-Whiting, M., Belliard, F., Bertozzi, S. M., Brand, A., Brown, K., Clément-Stoneham, G., Dawson, S., Dey, G., Ecer, D., Edmunds, S. C., Farley, A., Fischer, T. D., Franko, M., Fraser, J. S., Funk, K., Ganier, C., Harrison, M., Hatch, A., Hazlett, H., … Williams, M. (2024). Recommendations for accelerating open preprint peer review to improve the culture of science. PLOS Biology, 22(2), e3002502. https://doi.org/10.1371/journal.pbio.3002502
</p>
<p>
    Baker, M. (2015). Smart software spots statistical errors in psychology papers. Nature. https://doi.org/10.1038/nature.2015.18657
</p>
<p>
    Birukou, A., Wakeling, J. R., Bartolini, C., Casati, F., Marchese, M., Mirylenka, K., Osman, N., Ragone, A., Sierra, C. & Wassef, A. (2011). Alternatives to Peer Review: Novel Approaches for Research Evaluation. Frontiers in Computational Neuroscience, 5. https://doi.org/10.3389/fncom.2011.00056
</p>
<p>
    Bornmann, L. (2011). Scientific peer review. Annual Review of Information Science and Technology, 45(1), 197–245. https://doi.org/10.1002/aris.2011.1440450112
</p>
<p>
    Braben, D. & Dowler, R. (2017, 17. September). Peer review processes risk stifling creativity and limiting opportunities for game-changing scientific discoveries. LSE Impact Blog. https://blogs.lse.ac.uk/impactofsocialsciences/2017/09/17/peer-review-processes-riskstifling-creativity-and-limiting-opportunities-for-scientific-discoveries/
</p>
<p>
    Brembs, B. & Drury, L. (2024, 27. March). The Open Access rising tide: Gates Foundation ends support to Article Processing Charges. International Science Council. https://council.science/current/blog/the-open-access-rising-tide-gates-foundation-endssupport-to-article-processing-charges/
</p>
<p>
    Chapelle, F. H. (2014). The History and Practice of Peer Review. Groundwater, 52(1), 1–1. https://doi.org/10.1111/gwat.12139
</p>
<p>
    COPE. (2013). Ethical guidelines for peer reviewers (English). https://doi.org/10.24318/cope.2019.1.9
</p>
<p>
    COPE. (2021). Diversity and inclusivity. https://doi.org/10.24318/RLqSoVsZ
</p>
<p>
    Drury, L. (2022). The Normalization of Preprints. SRELS Journal of Information Management, 79–85. https://doi.org/10.17821/srels/2022/v59i2/169462
</p>
<p>
    Fyfe, A. (2019, 15. September). Quality in peer review: a view through the lens of time. The Royal Society. https://royalsociety.org/blog/2019/09/quality-in-peer-review-a-view-throughthe-lens-of-time/
</p>
<p>
    Gates Foundation Collaborates with F1000 to Launch Verified Preprint Platform. (2024, 4. April). Taylor & Francis News. https://newsroom.taylorandfrancisgroup.com/gatesfoundation-collaborates-with-f1000-to-launch-verified-preprint-platform/
</p>
<p>
    Ginsparg, P. (2011). ArXiv at 20. Nature, 476(7359), 145–147. https://doi.org/10.1038/476145a
</p>
<p>
    Heaven, D. (2018). AI peer reviewers unleashed to ease publishing grind. Nature, 563(7733), 609–610. https://doi.org/10.1038/d41586-018-07245-9
</p>
<p>
    Hess, E. L. (1975). Effects of the review process. IEEE Transactions on Professional Communication, PC-18(3), 196–199. https://doi.org/10.1109/TPC.1975.6591188
</p>
<p>
    Horbach, S. P. J. M. & Halffman, W. (2020). Journal Peer Review and Editorial Evaluation: Cautious Innovator or Sleepy Giant? Minerva, 58, 139–161. https://doi.org/10.1007/s11024-019-09388-z
</p>
<p>
    International Science Council. (2023). The Case for Reform of Scientific Publishing. https://doi.org/10.24948/2023.14
</p>
<p>
    Johnson, R. (2024, 28. June). Beyond the journal: The future of scientific publishing. FEBS. https://network.febs.org/posts/beyond-the-journal-the-future-of-scientificpublishing?channel_id=728-viewpoints
</p>
<p>
    Kaltenbrunner, W., Pinfield, S., Waltman, L., Woods, H. B. & Brumberg, J. (2022). Innovating peer review, reconfiguring scholarly communication: An analytical overview of ongoing peer review innovation activities. SocArXiv. https://doi.org/10.31235/osf.io/8hdxu
</p>
<p>
    Kaltenbrunner, Wolfgang, Waltman, L., Barnett, A., Byrne, J., Chin, J. M., Holcombe, A., Pinfield, S., Vazire, S. & Wilsdon, J. (2023). MetaRoR - a new form of scholarly publishing and peer review for STS. EASST Review, 421. https://easst.net/easst-review/easst-reviewvolume-421-july-2023/metaror-a-new-form-of-scholarly-publishing-and-peer-review-forsts/
</p>
<p>
    Karhulahti, V.-M. & Backe, H.-J. (2021). Transparency of peer review: a semi-structured interview study with chief editors from social sciences and humanities. Research Integrity and Peer Review, 6(1), 13. https://doi.org/10.1186/s41073-021-00116-4
</p>
<p>
    Keen, S. (2015). Post Keynesian Theories of Crisis. The American Journal of Economics and Sociology, 74(2), 298–324. https://doi.org/10.1111/ajes.12099
</p>
<p>
    Kelly, J., Sadeghieh, T. & Adeli, K. (2014). Peer review in scientific publications:benefits, critiques, & a survival guide. The Journal of the International Federation for Clinical Chemistry and Laboratory Medicine, 25(3), 227–243.
</p>
<p>
    Kronick, D. A. (1990). Peer review in 18th-century scientific journalism. JAMA, 263(10), 1321–1322. http://www.ncbi.nlm.nih.gov/pubmed/2406469
</p>
<p>
    Lifecycle Journals. (n.d.). Center for Open Science. Retrieved April 19, 2024, from https://www.cos.io/lifecyclejournals
</p>
<p>
    McCook, A. (2006. February). Is peer review broken? The Scientist. https://www.thescientist.com/uncategorized/is-peer-review-broken-47872
</p>
<p>
    Neff, B. D. & Olden, J. D. (2006). Is Peer Review a Game of Chance? BioScience, 56(4), 333–340. https://doi.org/10.1641/0006-3568(2006)56[333:IPRAGO]2.0.CO;2
</p>
<p>
    NISO RP-30-2023, Manuscript Exchange Common Approach (MECA) (Version 2.0.1). (2023). https://doi.org/10.3789/niso-rp-30-2023
</p>
<p>
    Nosek, B. A., Spies, J. R. & Motyl, M. (2012). Scientific Utopia. Perspectives on Psychological Science, 7(6), 615–631. https://doi.org/10.1177/1745691612459058
</p>
<p>
    Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. Science, 349(6251). https://doi.org/10.1126/science.aac4716
</p>
<p>
    Registered Reports: Peer review before results are known to align scientific values and practices. (n.d.). Center for Open Science. Retrieved January 22, 2024, from https://www.cos.io/initiatives/registered-reports
</p>
<p>
    Rennie, D. (1999). Editorial peer review: Its development and rationale. In F. Godleeand & T. Jefferson (Eds.), Peer Review in Health Sciences (pp. 1–13). BMJ Books.
</p>
<p>
    Roosendaal, H. E. & Geurts, P. A. T. M. (1997). Forces and functions in scientific communication: an analysis of their interplay. Co-Operative Research in Information Systems in Physics, 1–32.
</p>
<p>
    Ross-Hellauer, T. & Horbach, S. P. J. M. (2024). Additional experiments required: A scoping review of recent evidence on key aspects of Open Peer Review. Research Evaluation. https://doi.org/10.1093/reseval/rvae004
</p>
<p>
    Royal Society of Chemistry. (2020). Joint commitment for action on inclusion and diversity in publishing. https://www.rsc.org/policy-evidence-campaigns/inclusion-diversity/jointcommitment-for-action-inclusion-and-diversity-in-publishing/#:~:text=The Joint commitment for action,a workshop with other publishers
</p>
<p>
    Rühli, F. J., Finnegan, M., Hershkovitz, I. & Henneberg, M. (2009). Peer‐review for the peer‐review system. Human_ontogenetics, 3(1), 3–6. https://doi.org/10.1002/huon.200900004
</p>
<p>
    Saper, C. B., Maunsell, J. H. R. & Sagvolden, T. (2009). The Neuroscience Peer Review Consortium. Behavioral and Brain Functions, 5, 4. https://doi.org/10.1186/1744-9081-5-4
</p>
<p>
    Smith, G. D. & Jackson, D. (2022). Integrity and trust in research and publication: The crucial role of peer review. Journal of Advanced Nursing, 78(11). https://doi.org/10.1111/jan.15438
</p>
<p>
    Smith, O. M., Davis, K. L., Pizza, R. B., Waterman, R., Dobson, K. C., Foster, B., Jarvey, J. C., Jones, L. N., Leuenberger, W., Nourn, N., Conway, E. E., Fiser, C. M., Hansen, Z. A., Hristova, A., Mack, C., Saunders, A. N., Utley, O. J., Young, M. L. & Davis, C. L. (2023). Peer review perpetuates barriers for historically excluded groups. Nature Ecology & Evolution, 7(4), 512–523. https://doi.org/10.1038/s41559-023-01999-w
</p>
<p>
    Smith, R. (2006). Peer Review: A Flawed Process at the Heart of Science and Journals. Journal of the Royal Society of Medicine, 99(4), 178–182. https://doi.org/10.1177/014107680609900414
</p>
<p>
    Spezi, V., Wakeling, S., Pinfield, S., Creaser, C., Fry, J. & Willett, P. (2017). Open-access mega-journals. Journal of Documentation, 73(2), 263–283. https://doi.org/10.1108/JD-06-2016-0082
</p>
<p>
    Squazzoni, F., Bravo, G., Farjam, M., Marusic, A., Mehmani, B., Willis, M., Birukou, A., Dondio, P. & Grimaldo, F. (2021). Peer review and gender bias: A study on 145 scholarly journals. Science Advances, 7(2). https://doi.org/10.1126/sciadv.abd0299
</p>
<p>
    Steinhauser, G., Adlassnig, W., Risch, J. A., Anderlini, S., Arguriou, P., Armendariz, A. Z., Bains, W., Baker, C., Barnes, M., Barnett, J., Baumgartner, M., Baumgartner, T., Bendall, C. A., Bender, Y. S., Bichler, M., Biermann, T., Bini, R., Blanco, E., Bleau, J., … Zwiren, N. (2012). Peer review versus editorial review and their role in innovative science. Theoretical Medicine and Bioethics, 33(5), 359–376. https://doi.org/10.1007/s11017-012-9233-1
</p>
<p>
    Stoddart, C. (2016). Is there a reproducibility crisis in science? Nature. https://doi.org/10.1038/d41586-019-00067-3
</p>
<p>
    Sukharev, O. S. (2020). Topos of Russian peer review (on peer review as creativity, subject to amateurism). Investments in Russia, 10(309), 43–48.
</p>
<p>
    Taubert, N. (2017). Formale wissenschaftliche Kommunikation. In Forschungsfeld Wissenschaftskommunikation (pp. 125–139). Springer Fachmedien Wiesbaden. https://doi.org/10.1007/978-3-658-12898-2_7
</p>
<p>
    Tite, L. & Schroter, S. (2007). Why do peer reviewers decline to review? A survey. Journal of Epidemiology & Community Health, 61, 9–12.
</p>
<p>
    Walker, R., Barros, B., Conejo, R., Neumann, K. & Telefont, M. (2015). Bias in peer review: a case study. F1000Research, 4, 21. https://doi.org/10.12688/f1000research.6012.1
</p>
<p>
    Waltman, L., Kaltenbrunner, W., Pinfield, S. & Woods, H. B. (2023). How to improve scientific peer review: Four schools of thought. Learned Publishing, 36(3), 334–347. https://doi.org/10.1002/leap.1544
</p>
<p>
    Waltman, L., Mulati, B., Ni, R., Wang, J., Lai, K. H. (Adrian), Luwel, M., Noyons, E., van Leeuwen, T. & Weimer, V. (2023). Preprinting and open peer review at the STI 2023 conference: Evaluation of an open science experiment. Leiden Madtrics. https://www.leidenmadtrics.nl/articles/preprinting-and-open-peer-review-at-the-sti-2023-conference-evaluation-of-an-open-science-experiment
</p>
<p>
    Watling, C., Shaw, J., Field, E. & Ginsburg, S. (2023). ‘For the most part it works’: Exploring how authors navigate peer review feedback. Medical Education, 57(2), 151–160. https://doi.org/10.1111/medu.14932
</p>
<p>
    Williams, J. B. & McNeill, J. M. (2005). The Current Crisis In Neoclassical Economics and the Case for an Economic Analysis Based on Sustainable Development. SSRN Electronic Journal. https://doi.org/10.2139/ssrn.1606342
</p>
<p>
    Willis, M. (2016). Why do peer reviewers decline to review manuscripts? A study of reviewer invitation responses. Learned Publishing, 29(1), 5–7. https://doi.org/10.1002/leap.1006
</p>
<p>
    Wolfram, D., Wang, P., Hembree, A. & Park, H. (2020). Open peer review: promoting transparency in open science. Scientometrics, 125(2), 1033–1051. https://doi.org/10.1007/s11192-020-03488-4
</p>
<p>
    Woods, H. B., Brumberg, J., Kaltenbrunner, W., Pinfield, S. & Waltman, L. (2022). Innovations
    in peer review in scholarly publishing: A meta-summary. SocArXiv.
    https://doi.org/10.31235/osf.io/qaksd
</p>
</div>
    `,
}

const manuscriptData = {
  9: {
    title: 'Evolution of Peer Review in Scientific Communication',
    doi: '10.31235/osf.io/b2ra3',
    published: 'Published on Nov 19, 2024',
    reviews: [
      {
          name: 'Balazs Aczel',
          orcid: '0000-0001-9364-4988',
          review: splitTextIntoParagraphs(`
                    The work ‘Evolution of Peer Review in Scientific Communication’ provides a consise and radable summary of the historical role of peer review in modern science. The paper categorises the peer review practices into three models: (1) traditional pre-publication peer review; (2) registered reports; (3) post-publication peer review. The author compares the three models and draws the conclusion that the “third model offers the best way to implement the main funtion of scientific communication”. 

I would contest this conclusion. In my eyes the three models serve different aims - with more or less drawbacks. For example, although Model 3 is less chance to insert bias to the readers, it also weakens the filtering function of the review system. Let’s just think about the dangers of machine-generated articles, paper-mills, p-hacked research reports and so on. Although the editors does some pre-screening for the submissions, in a world with only Model 3 peer review the literature could easily get loaded with even more ‘garbage’ than in a model where additional peers help the screening. 

Compared to registered reports other aspects can come to focus that Model 3 cannot cover. It’s the efficiency of researchers’ work. In the care of registered reports, Stage 1 review can still help researchers to modify or improve their research design or data collection method. Empirical work can be costly and time-consuming and post-publication review can only say that “you should have done it differently then it would make sense” . 

Finally, the author puts openness as a strength of Model 3. In my eyes, openness is a separate question. All models can work very openly and transparently in the right circumstances. This dimension is not an inherent part of the models. 

In conclusion, I would not make verdict over the models, instead emphasise the different functions they can play in scientific communication.

A minor comment: I found that a number of statements lack references in the Introduction. I would have found them useful for statements such as “There is a point of view that peer review is included in the implicit contract of the researcher.”
`),
      },
      {
          name: 'Martin Bush',
          orcid: '0000-0001-9018-4373',
          review: splitTextIntoParagraphs(`
In "Evolution of Peer Review in Scientific Communication", Kochetkov provides a point-of-view discussion of the current state of play of peer review for scientific literature, focussing on the major models in contemporary use and recent innovations in reform. In particular, they present a typology of three main forms of peer review: traditional pre-

publication review; registered reports; and post-publication review, their preferred model. The main contribution it could make would be to help consolidate typologies and terminologies, to consolidate major lines of argument and to present some useful visualisations of these. On the other hand, the overall discussion is not strongly original in character.

The major strength of this article is that the discussion is well-informed by contemporary developments in peer-review reform. The typology presented is modest and, for that, readily comprehensible and intuitive. This is to some extent a weakness as well as a strength; a typology that is too straightforward may not be useful enough. As suggested at the end it might be worth considering how to complexify the typology at least at subordinate levels without sacrificing this strength. The diagrams of workflows are particularly clear.

The primary weakness of this article is that it presents itself as an 'analysis' from which they 'conclude' certain results such as their typology, when this appears clearly to be an opinion piece. In my view, this results in a false claim of objectivity which detracts from what would otherwise be an interesting and informative, albeit subjective, discussion, and thus fails to discuss the limitations of this approach. A secondary weakness is that the discussion is not well structured and there are some imprecisions of expression that have the potential to confuse, at least at first.

This primary weakness is manifested in several ways. The evidence and reasoning for claims made is patchy or absent. One instance of the former is the discussion of bias in peer review. There are a multitude of studies of such bias and indeed quite a few meta-analyses of these studies. A systematic search could have been done here but there is no attempt to discuss the totality of this literature. Instead, only a few specific studies are cited. Why are these ones chosen? We have no idea. To this extent I am not convinced that the references used here are the most appropriate. Instances of the latter are the claim that "The most well-known initiatives at the moment are ResearchEquals and Octopus" for which no evidence is provided, the claim that " we believe that journal-independent peer review is a special case of Model 3" for which no further argument is provided, and the claim that "the function of being the "supreme judge" in deciding what is "good" and "bad" science is taken on by peer review" for which neither is provided.

A particular example of this weakness, which is perhaps of marginal importance to the overall paper but of strong interest to this reviewer is the rather odd engagement with history within the paper. It is titled "Evolution of Peer Review" but is really focussed on the contemporary state-of-play. Section 2 starts with a short history of peer review in scientific publishing, but that seems intended only to establish what is described as the 'traditional' model of peer review. Given that that short history had just shown how peer review had been continually changing in character over centuries - and indeed Kochetkov goes on to describe further changes - it is a little difficult to work out what 'traditional' might mean here; what was 'traditional' in 2010 was not the same as what was 'traditional' in 1970. It is not clear how seriously this history is being taken. Kochetkov has earlier written that "as early as the beginning of the 21st century, it was argued that the system of peer review is 'broken'" but of course criticisms - including fundamental criticisms - of peer review are much older than this. Overall, this use of history seems designed to privilege the experience of a particular moment in time, that coincides with the start of the metascience reform movement.

Section 2 also demonstrates some of the second weakness described, a rather loose structure. Having moved from a discussion of the history of peer review to detail the first model, 'traditional' peer review, it then also goes on to describe the problems of this model. This part of the paper is one of the best - and best -evidenced. Given the importance of it to the main thrust of the discussion it should probably have been given more space as a Section all on its own.

Another example is Section 4 on Modular Publishing, in which Kochetkov notes "Strictly speaking, modular publishing is primarily an innovative approach for the publishing workflow in general rather than specifically for peer review." Kochetkov says "This is why we have placed this innovation in a separate category" but if it is not an innovation in peer review, the bigger question is 'Why was it included in this article at all?'.

One example of the imprecisions of language is as follows. The author also shifts between the terms 'scientific communication' and 'science communication' but, at least in many contexts familiar to this reviewer, these are not the same things, the former denoting science-internal dissemination of results through publication (which the author considers), conferences and the like (which the author specifically excludes) while the latter denotes the science-external public dissemination of scientific findings to non-technical audiences, which is entirely out of scope for this article.

A final note is that Section 3, while an interesting discussion, seems largely derivative from a typology of Waltman, with the addition of a consideration of whether a reform is 'radical' or 'incremental', based on how 'disruptive' the reform is. Given that this is inherently a subjective decision, I wonder if it might not have been more informative to consider 'disruptiveness' on a scale and plot it accordingly. This would allow for some range to be imagined for each reform as well; surely reforms might be more or less disruptive depending on how they are implemented. Given that each reform is considered against each model, it is somewhat surprising that this is not presented in a tabular or graphical form.

Beyond the specific suggestions in the preceding paragraphs, my suggestions to improve this article are as follows:

1. Reconceptualize this as an opinion piece. Where systematic evidence can be drawn upon to make points, use that, but don't be afraid to just present a discussion from what is clearly a well-informed author.

2. Reconsider the focus on history and 'evolution' if the point is about the current state of play and evaluation of reforms (much as I would always want to see more studies on the history and evolution of peer review).

3. Consider ways in which the typology might be expanded, even if at subordinate level.

I have no competing interests in the compilation of this review, although I do have specific interests as noted above.
          `)
      },
      {
          name: 'Olmo R. van den Akker',
          orcid: '0000-0002-0712-3746',
          review: splitTextIntoParagraphs(`
          missing!!
          `)
      },
      {
          name: 'Wendy Leuenberger',
          orcid: '0000-0001-6567-9913',
          review: splitTextIntoParagraphs(`
          Overall thoughts: This is an interesting history piece regarding peer review and the development of review over time. Given the author’s conflict of interest and association with the Centre developing MetaROR, I think that this paper might be a better fit for an information page or introduction to the journal and rationale for the creation of MetaROR, rather than being billed as an independent article. Alternatively, more thorough information about advantages to pre-publication review or more downsides/challenges to post-publication review might make the article seem less affiliated. I appreciate seeing the history and current efforts to change peer review, though I am not comfortable broadly encouraging use of these new approaches based on this article alone.

 

Page 3: It’s hard to get a feel for the timeline given the dates that are described. We have peer review becoming standard after WWII (after 1945), definitively established by the second half of the century, an example of obligatory peer review starting in 1976, and in crisis by the end of the 20th century. I would consider adding examples that better support this timeline – did it become more common in specific journals before 1976? Was the crisis by the end of the 20th century something that happened over time or something that was already intrinsic to the institution? It doesn’t seem like enough time to get established and then enter crisis, but more details/examples could help make the timeline clear. 

Consider discussing the benefits of the traditional model of peer review.

Table 1 – Most of these are self-explanatory to me as a reader, but not all. I don’t know what a registered report refers to, and it stands to reason that not all of these innovations are familiar to all readers. You do go through each of these sections, but that’s not clear when I initially look at the table. Consider having a more informative caption. Additionally, the left column is “Course of changes” here but “Directions” in text. I’d pick one and go with it for consistency.

3.2: Considering mentioning your conflict of interest here where MetaROR is mentioned.

With some of these methods, there’s the ability to also submit to a regular journal. Going to a regular journal presumably would instigate a whole new round of review, which may or may not contradict the previous round of post-publication review and would increase the length of time to publication by going through both types. If someone has a goal to publish in a journal, what benefit would they get by going through the post-publication review first, given this extra time?

There’s a section talking about institutional change (page 14). It mentions that openness requires three conditions – people taking responsibility for scientific communication, authors and reviewers, and infrastructure. I would consider adding some discussion of readers and evaluators. Readers have to be willing to accept these papers as reliable, trustworthy, and respectable to read and use the information in them. Evaluators such as tenure committees and potential employers would need to consider papers submitted through these approaches as evidence of scientific scholarship for the effort to be worthwhile for scientists.

Based on this overview, which seems somewhat skewed towards the merits of these methods (conflict of interest, limited perspective on downsides to new methods/upsides to old methods), I am not quite ready to accept this effort as equivalent of a regular journal and pre-publication peer review process. I look forward to learning more about the approach and seeing this review method in action and as it develops.  
          `)
      },
    ],
    authors: [
      {
        name: 'Dmitry Kochetkov',
        affiliations: [],
      },
    ],
    dates: {
        'Curated version': 'May 23, 2024',
        'Peer reviewed': 'May 23, 2024',
        'Preprint posted': 'May 23, 2024',
    },
    sections: article9Sections,
  },
  12: {
    title: 'Researchers are willing to trade their results for journal prestige: results from a discrete choice experiment',
    doi: '10.31219/osf.io/uwt3b',
    published: 'Published on Aug 02, 2024',
    reviews: [
      {
          name: 'Stephen Curry',
          orcid: '0000-0002-0552-8870',
          review: `<p class="paragraph">This manuscript reports the results of an interesting discrete choice experiment designed to probe the values and interests that inform researchers’ decisions on where to publish their work.</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">Although I am not an expert in the design of discrete choice experiments, the methodology is well explained and the design of the study comes across as well considered, having been developed in a staged way to identify the most appropriate pairings of journal attributes to include.</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">The principal findings to my mind, well described in the abstract, include the observations that (1) researchers’ strongest preference was for journal impact factor and (2) that they were prepared to remove results from their papers if that would allow publication in a higher impact factor journal. The first of these is hardly surprising –&nbsp;and is consistent with a wide array of literature (and ongoing activism, e.g. through DORA, CoARA). The second is much more striking – and concerning for the research community (and its funders). This is the first time I have seen evidence for such a trade-off.</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">Overall, the manuscript is very clearly written. I have no major issues with the methods or results. However, I think but some minor revisions would enhance the clarity and utility of the paper.
          </p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">First, although it is made clear in Table 1 that the researchers included in the study are all from the medical and clinical sciences, this is not apparent from the title or the abstract. I think both should be modified to reflect the nature of the sample. In my experience researchers in these fields are among those who feel most intensely the pressure to publish in high IF journals. The authors may want also to reflect in a revised manuscript how well their findings may transfer to other disciplines.</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">Second, in several places I felt the discussion of the results could be enriched by reference to papers in the recent literature that are missing from the bibliography. These include (1) Muller and De Rijcke’s 2017 paper on Thinking with Indicators, which discusses how the pressure of metrics impacts the conduct of research (<a href="https://doi.org/10.1093/reseval/rvx023" rel="" target="blank">https://doi.org/10.1093/reseval/rvx023</a>); (2) Bjorn Brembs’ analysis of the reliability of research published in prestige science journals (<a href="https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2018.00376/full" rel="" target="blank">https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2018.00376/full</a>; and (3) McKiernan’s et al.’s examination of the use of the Journal Impact Factor in academic review, promotion, and tenure evaluations (<a href="https://pubmed.ncbi.nlm.nih.gov/31364991/" rel="" target="blank">https://pubmed.ncbi.nlm.nih.gov/31364991/</a>).</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">Third, although the text and figures are nicely laid out, I would recommend using a smaller or different font for the figure legends to more easily distinguish them from body text.</p>

            `,
      },
      {
          name: 'Tony Ross-Hellauer',
          orcid: '0000-0003-4470-7027',
          review: `
          <p class="paragraph">Peer Review of Preprint: "Researchers Are Willing to Trade Their Results for Journal Prestige: Results from a Discrete Choice Experiment", <a href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fdoi.org%2F10.31219%2Fosf.io%2Fuwt3b__%3B!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOWleCpgE%24&amp;data=05%7C02%7Ca.l.brasil.varandas.pinto%40cwts.leidenuniv.nl%7C9f47a111adec49d04bb608dd0614ae94%7Cca2a7f76dbd74ec091086b3d524fb7c8%7C0%7C0%7C638673408085227949%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=%2Fk4Kg%2BJVM4lOvkopA0GieRD5h3nDwLeMNsXdg7kcgvE%3D&amp;reserved=0" rel="" target="blank" title="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fdoi.org%2F10.31219%2Fosf.io%2Fuwt3b__%3B!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOWleCpgE%24&amp;data=05%7C02%7Ca.l.brasil.varandas.pinto%40cwts.leidenuniv.nl%7C9f47a111adec49d04bb608dd0614ae94%7Cca2a7f76dbd74ec091086b3d524fb7c8%7C0%7C0%7C638673408085227949%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=%2Fk4Kg%2BJVM4lOvkopA0GieRD5h3nDwLeMNsXdg7kcgvE%3D&amp;reserved=0">https://doi.org/10.31219/osf.io/uwt3b</a></p><p class="paragraph">&nbsp;</p><p class="paragraph">Tony Ross-Hellauer, <a href="mailto:tross@know-center.at" rel="" target="blank" title="mailto:tross@know-center.at">tross@know-center.at</a>, 2nd Nov 2024</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">In "<em>Researchers Are Willing to Trade Their Results for Journal Prestige: Results from a Discrete Choice Experiment</em>", the authors investigate researchers’ publication preferences using a discrete choice experiment in a cross-sectional survey of international health and medical researchers. The study investigates publishing decisions in relation to negotiation of trade-offs amongst various factors like journal impact factor, review helpfulness, formatting requirements, and usefulness for promotion in their decisions on where to publish. The research is timely; as the authors point out, reform of research assessment is currently a very active topic. The design and methods of the study are suitable and robust. The use of focus groups and interviews in developing the attributes for study shows care in the design. The survey instrument itself is generally very well-designed, with important tests of survey fatigue, understanding (<em>dominant choice task</em>) and respondent choice consistency (repeat choice task) included. Respondent performance was good or excellent across all these checks. Analysis methods (pMMNL and latent class analysis) are well-suited to the task. Pre-registration and sharing of data and code show commitment to transparency. Limitations are generally well-described.</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">In the below, I give suggestions for clarification/improvement. Except for some clarifications on limitations and one narrower point (reporting of qualitative data analysis methods), my suggestions are only that – the preprint could otherwise stand, as is, as a very robust and interesting piece of scientific work.</p>
          <p class="paragraph">&nbsp;</p>
          <p class="paragraph">1. Respondents come from a broad range of countries (63), with 47 of those countries represented by fewer than 10 respondents. Institutional cultures of evaluation can differ greatly across nations. And we can expect variability in exposure to the messages of DORA (seen, for example, in level of permeation of DORA as measured by signatories in each country, <a href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fsfdora.org%2Fsigners%2F).__%3B!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOYtZsJkA%24&amp;data=05%7C02%7Ca.l.brasil.varandas.pinto%40cwts.leidenuniv.nl%7C9f47a111adec49d04bb608dd0614ae94%7Cca2a7f76dbd74ec091086b3d524fb7c8%7C0%7C0%7C638673408085242099%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=by5mhPfSM0MFFG9LE2iiYjdtSs5IhvpuukqVv%2FLak2s%3D&amp;reserved=0" rel="" target="blank" title="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fsfdora.org%2Fsigners%2F).__%3B!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOYtZsJkA%24&amp;data=05%7C02%7Ca.l.brasil.varandas.pinto%40cwts.leidenuniv.nl%7C9f47a111adec49d04bb608dd0614ae94%7Cca2a7f76dbd74ec091086b3d524fb7c8%7C0%7C0%7C638673408085242099%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=by5mhPfSM0MFFG9LE2iiYjdtSs5IhvpuukqVv%2FLak2s%3D&amp;reserved=0">https://sfdora.org/signers/).</a> In addition, some contexts may mandate or incentivise publication in some venues using measures including IF, but also requiring journals to be in certain databases like WoS or Scopus, or having preferred journal lists). I would suggest the authors should include in the Sampling section a rationale for taking this international approach, including any potentially confounding factors it may introduce, and then adding the latter also in the limitations.</p>
          <p class="paragraph">&nbsp;</p>

          <p class="paragraph">2. Reporting of qualitative results: In the introduction and methods, the role of the focus groups and interviews seems to have been just to inform the design of the experiment. But then, results from that qualitative work then appear as direct quotes within the discussion to contextualise or explain results. In this sense though, the qualitative results are being used as new data. Given this, I feel that the methods section should include description of the methods and tools used for qualitative data analysis (currently it does not). But in addition, to my understanding (and this may be a question of disciplinary norms – I’m not a health/medicine researcher), generally new data should not be introduced in the discussion section of a research paper. Rather the discussion is meant to interpret, analyse, and provide context for the results that have already been presented. I personally hence feel that the paper would benefit from the qualitative results being reported separately within the results section.</p>

          <p class="paragraph">&nbsp;</p>

          <p class="paragraph">3. Impact factors – Discussion section: While there is interesting new information on the relative trade-offs amongst other factors, the most emphasised finding, that impact factors still play a prominent role in publication venue decisions, is hardly surprising. More could perhaps be done to compare how the levels of importance reported here differ with previous results from other disciplines or over time (I know a like-for-like comparison is difficult but other studies have investigated these themes, e.g., <a href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fdoi.org%2F10.1177%2F0165551520958591__%3B!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOxpGR1v8%24&amp;data=05%7C02%7Ca.l.brasil.varandas.pinto%40cwts.leidenuniv.nl%7C9f47a111adec49d04bb608dd0614ae94%7Cca2a7f76dbd74ec091086b3d524fb7c8%7C0%7C0%7C638673408085255478%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=w2bB5PB8l9vvCqX14MqsqEClFu2YgzGmb3MQTp3gxj8%3D&amp;reserved=0" rel="" target="blank" title="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fdoi.org%2F10.1177%2F0165551520958591__%3B!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOxpGR1v8%24&amp;data=05%7C02%7Ca.l.brasil.varandas.pinto%40cwts.leidenuniv.nl%7C9f47a111adec49d04bb608dd0614ae94%7Cca2a7f76dbd74ec091086b3d524fb7c8%7C0%7C0%7C638673408085255478%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=w2bB5PB8l9vvCqX14MqsqEClFu2YgzGmb3MQTp3gxj8%3D&amp;reserved=0">https://doi.org/10.1177/01655515209585</a>). In addition, beyond the question of whether impact factors are important, a more interesting question in my view is why they still persist. What are they used for and why are they still such important “driver[s] of researchers’ behaviour”? This was not the authors’ question, and they do provide some contextualisation by quoting their participants, but still I think they could do more to contextualise what is known from the literature on that to draw out the implications here. The attribute label in the methods for IF is “ranking”, but ranking according of what and for what? Not just average per-article citations in a journal over a given time frame. Rather, impact factors are used as a proxy indicators of less-tangible desirable qualities – certainly prestige (as the title of this article suggests), but also quality, trust (as reported by one quoted focus group member “I would never select a journal without an impact factor as I always publish in journals that I know and can trust that are not predatory”, p.6), journal visibility, importance to the field, or improved chances of downstream citations or uptake in news media/policy/industry etc. Picking apart the interactions of these various factors in researchers’ choices to make use of IFs (which is not in all cases bogus or unjustified) could add valuable context. I’d especially recommend engaging at least briefly with more work from Science and Technology Studies - especially Müller and de Rijcke’s excellent Thinking with Indicators study (doi: 10.1093/reseval/rvx023), but also those authors other work, as well as work from Ulrike Felt, Alex Rushforth (esp <a href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fdoi.org%2F10.1007%2Fs11024-015-9274-5__%3B!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOF3aJWtI%24&amp;data=05%7C02%7Ca.l.brasil.varandas.pinto%40cwts.leidenuniv.nl%7C9f47a111adec49d04bb608dd0614ae94%7Cca2a7f76dbd74ec091086b3d524fb7c8%7C0%7C0%7C638673408085269138%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&amp;sdata=I%2FZBIK6B0cJ0%2B2jm6DK9EiPIbyR0%2BvrivPlkfLqRPAA%3D&amp;reserved=0" rel="" target="blank" title="Original URL:
https://urldefense.com/v3/__https://doi.org/10.1007/s11024-015-9274-5__;!!NVzLfOphnbDXSw!HdeyeHHei6yWQHFjhN3deSSfp82ur9i9JNOLEVOYZN0BvyslUO2S8DlvjBbautmafJEvlUsxQZbT0JLQX7lO8EcOF3aJWtI$

Click to follow link.">https://doi.org/10.1007/s11024-015-9274-5</a>), Björn Hammerfelt and others.</p>
<p class="paragraph">&nbsp;</p>
<p class="paragraph">4. Disciplinary coverage: (1) A lot of the STS work I talk about above emphasises epistemic diversity and the ways cultures of indicator use differ across disciplinary traditions. For this reason, I think it should be pointed out in the limitations that this is research in Health/Med only, with questions on generalisability to other fields. (2) Also, although the abstract and body of the article do make clear the disciplinary focus, the title does not. Hence, I believe the title should be slightly amended (e.g., “Health and Medical Researchers Are Willing to Trade …”)</p>

          `,
      },
    ],
    authors: [
        {
            name: 'Natalia Gonzalez Bohorquez',
            affiliations: ['Queensland University of Technology'],
            email: 'natalia.gonzalezbohorquez@hdr.qut.edu.au',
        },
        {
            name: 'Sucharitha Weerasuriya',
            affiliations: ['Queensland University of Technology'],
            email: 'sucharitha.weerasuriya@qut.edu.au',
        },
        {
            name: 'David Brain',
            affiliations: ['Queensland University of Technology'],
            email: 'david.brain@qut.edu.au',
        },
        {
            name: 'Sameera Senanayake',
            affiliations: ['Duke-NUS Medical School'],
            email: 'sameera.senanayake@duke-nus.edu.sg',
        },
        {
            name: 'Sanjeewa Kularatna',
            affiliations: ['Duke-NUS Medical School'],
            email: 'sanjeewa.kularatna@duke-nus.edu.sg',
        },
        {
            name: 'Adrian Barnett',
            affiliations: ['Queensland University of Technology'],
            email: 'a.barnett@qut.edu.au',
            orcid: '0000-0001-6339-0374',
        },
    ],
    dates: {
        'Curated version': 'Sep 12, 2024',
        'Peer reviewed': 'Sep 12, 2024',
        'Preprint posted': 'Sep 12, 2024',
    },
    sections: {
        Abstract: splitTextIntoParagraphs(`
        The research community’s fixation on journal prestige is harming research quality, as some researchers focus on where to publish instead of what. We examined researchers’ publication preferences using a discrete choice experiment in a cross-sectional survey of international health and medical researchers. We asked researchers to consider two hypothetical journals and decide which they would prefer. The hypothetical journals varied in their impact factor, formatting requirements, speed of peer review, helpfulness of peer review, editor’s request to cut results, and whether the paper would be useful for their next promotion. These attributes were designed using focus groups and interviews with researchers, with the aim of creating a tension between personal and societal benefit. Our survey found that researchers’ strongest preference was for the highest impact factor, and the second strongest for a moderate impact factor. The least important attribute was a preference for making changes in format and wording compared with cutting results. Some respondents were willing to cut results in exchange for a higher impact factor. Despite international efforts to reduce the importance of impact factor, it remains a driver of researchers’ behaviour. The most prestigious journals may have the most partial evidence, as researchers are willing to trade their results for prestige.
        `
        ),
        rest: `
        <p class="paragraph">Peer reviewed publications are academic currency [1]. Having sufficient publications in the bank is important for hiring, promotion and funding [2, 3]. Publications are also a vital record of evidence which can improve policy and practice, and direct future research [4]. Ideally publications could be both useful as academic currency and sources of evidence for scientific progress. However, the value of publications as a currency may be trumping their main purpose to provide reliable evidence [5]. The intrinsic motivation of a “Taste for Science” (described by Merton [6]) may have been superseded by the extrinsic motivation of a “Taste for Publications” [7]. In a “publish or perish” world, researchers may “prefer popularity to intrinsic value” and hence focus on where to publish instead of what to publish [1].</p><p class="paragraph">Most researchers regularly make considered decisions on what journal to submit to and how to navigate peer review. Factors include the journal’s prestige (often defined using the impact factor), the target audience, the article processing charges, the required formatting, and the journal’s rejection rate and turnaround times. The perfect home for a paper is rare [8], and researchers often need to make compromises to be successful [9]. We aimed to study some of the important compromises that researchers make and thus examine how researchers publish their research.<br>We were especially interested in the trade-offs that researchers make concerning personal benefits and the wider benefits for society. We aimed to test trade-offs between earning academic currency and creating an accurate record of the evidence.</p><h2>Results</h2><h3>Sample description</h3><p class="paragraph">The surveys were collected between 26 March 2024 and 30 May 2024 (66 days) (see Supplement S.1). The median time to complete the survey was 7 minutes. We received 616 responses from 7,376 invites giving a response rate of 8.5%; this excludes 170 emails that were no longer active. A classification tree found that the response rate varied by email domain, with a higher response rate of 21% for – amongst others – Australia, Switzerland and the UK, and lower response rate of 3% for – amongst others – China, Germany and Japan (see Supplement S.2). The questions were generally well completed but there was some survey fatigue with under 1% missing the first choice task and 15% missing the tenth and last choice task (Supplement S.3).</p><p class="paragraph">Thirteen percent of respondents found answering the hypothetical choices to be difficult or very difficult. The dominant choice task was selected by over 99% of respondents, indicating an excellent understanding of the attributes and levels. The repeat choice task had the same answer as the original for 79% of respondents, indicating good internal consistency.</p><p class="paragraph">Summary statistics on the sample are in Table 1. Respondents had been working in research for a median of 10 years and had a median of 43 peer reviewed papers. Forty-seven percent were female. The most popular broad research area was Clinical Sciences (57%). Forty percent of respondents had a personal target for their annual number of publications.</p><p class="paragraph">Table 1: Summary statistics on the respondents’ characteristics. Whether researchers had a target number of publications was only asked in the final sample; respondents could tick multiple answers for this question. Q1 = first quartile, Q3 = third quartile.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_t1-1024x835.png" alt="" data-id="c1fbc548-5ea2-4d8e-8919-2e4c664bb105"><figcaption id="c1fbc548-5ea2-4d8e-8919-2e4c664bb105" class="decoration"></figcaption></figure><p class="paragraph">The sample included responses from 63 countries, with the three most common of USA (15%), UK (11%) and Australia (10%) (table of all countries in Supplement S.4).</p><h3>Researchers’ preferences</h3><p class="paragraph">The utilities for each attribute are in Figure 1 and Table 2. The figure also shows the utilities stratified by the respondents’ characteristics and the scenario wording concerning prior rejections.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_1-1024x926.png" alt="" data-id="ca96f181-2f8e-45b6-b3a3-1329346e475a"><figcaption class="wp-element-caption">Figure 1: Utility estimates and 95% confidence intervals for the six attributes. The dotted vertical line at zero is for no difference in utility. Forty-three publications was the sample median. JIF = journal impact factor.</figcaption></figure><p class="paragraph">Table 2: Utilities for the journal preferences and attribute importance. See Table 3 for the full wording of the attributes and levels. JIF = journal impact factor.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_t2-1024x270.png" alt="" data-id="11ab5674-e945-4e88-8313-154cfad55909"><figcaption id="11ab5674-e945-4e88-8313-154cfad55909" class="decoration"></figcaption></figure><p class="paragraph">The strongest preference was for the highest impact factor and the second strongest for the moderate impact factor. The least important attribute was a preference for making changes in format and wording compared with cutting a table and analysis.</p><p class="paragraph">After the impact factor, the next strongest preference was for a helpful review. The utilities for a fast review and minor formatting were similar. Researchers had a clear preference for papers that were useful for their promotion.</p><p class="paragraph">More experienced researchers had a stronger preference for the highest impact factor and minor formatting. Researchers who had more peer reviewed papers had a much stronger preference for the highest and moderate impact factors.</p><p class="paragraph">Female researchers had slightly stronger preferences for helpful reviews and papers that were useful for their promotion.</p><p class="paragraph">There was little difference in researchers’ preferences by whether the paper had been previously rejected or not.</p><p class="paragraph">The latent class results are in Figure 2. The optimal number of groups according to the AIC was four. The largest group had the strongest preferences for impact factor, a relatively small preference for fast results, and a slight preference for cutting results over minor formatting. The second largest group had the strongest preference for a helpful review, with a much reduced – although still positive – preference for journal impact factor. The third group were not concerned about a helpful review, but strongly preferred minor over major formatting and a paper that was useful for their promotion. Ten percent of respondents provided non-informative responses.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_2-1024x964.png" alt="" data-id="13d7cf77-cccd-4be0-b096-fd8073de7101"><figcaption class="wp-element-caption">Figure 2: Utility estimates and 95% confidence intervals for the six attributes using a latent class model. The percents in the panel headers are the group sizes. The dotted vertical line at zero is for no difference in utility. JIF = journal impact factor.</figcaption></figure><h3>Interactions</h3><p class="paragraph">The five planned interactions are plotted in Figure 3 with the estimates in Supplement S.5. When the journal had no impact factor, there was a stronger preference for a faster review. The journal rank had a similar interaction with both the editor’s requests and the style requirements, as there was no difference in utility when the journal had no impact factor. This could indicate an indifference by researchers about their papers in journals without an impact factor.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_3-1024x895.png" alt="" data-id="8aba2156-827f-4b5d-bd4a-df6535fbe41f"><figcaption class="wp-element-caption">Figure 3: Utility estimates for the five planned interactions. The dots are the means and the vertical lines are 95% confidence intervals. The reference group is the left-most level on the x-axis with the green line</figcaption></figure><p class="paragraph">There was an interaction between the editor’s requests and a helpful review, as if the review was not helpful then there was a stronger preference for formatting and wording changes over cutting results. Whereas for helpful reviews, researchers showed little difference between the editor’s requests, which could be because they interpreted all requests as helpful.</p><p class="paragraph">There was a small interaction between a helpful review and speed, as researchers were more willing to wait for a helpful review.</p><h2>Discussion</h2><p class="paragraph">Researchers had the strongest preference for impact factor above any other tested attributes. This was both a desire for high impact factors and an aversion to papers with no impact factor. The importance of impact factor to researchers has been called an “obsession” [10], a “mania” [11], and a “game” that encourages “questionable practices” [12]. Major international initiatives have sought to combat the influence of impact factors, such as DORA in 2012<br>(https://sfdora.org/) and COARA in 2022 (https://coara.eu/). Despite these initiatives and the extensive debate on the negative consequences of using impact factors for evaluating researchers, the highest possible impact factor is a target for many researchers. A focus group participant framed impact factors as useful for “quantifying my academic abilities”, whilst a survey participant commented, “I’ve been told if it isn’t in an impact factor over 10 it doesn’t matter/count”. Journals must be indexed for three years to get an impact factor, but some respondents interpreted a journal without an impact factor as predatory rather than new, as stated by a survey participant, “I would never select a journal without an impact factor as I always publish in journals that I know and can trust that are not predatory.”</p><p class="paragraph">Researchers with more publications and more years of experience had a stronger preference for impact factor (Figure 1). This could be because some early career researchers are yet to understand the importance impact factors. Another explanation is a survivorship effect, as researchers with high impact factor publications have an advantage in employment and promotion [13], whilst researchers with less prestigious papers are out-competed [5].</p><p class="paragraph">Some survey respondents commented that they could not understand how a paper in a high impact factor journal could not be useful for their promotion or fellowship, which was a combination in the discrete choice tasks. This illustrates the power of the impact factor, as it trumps the content of the paper [11]. A recent survey showed how the content of papers is commonly neglected by grant and hiring committees, as over half use journal impact factor to assess credibility [14]. When fellowship and hiring committees make career-changing decisions based on impact factors, this sends a clear signal to researchers to prioritise impact factors over content. A researcher in our interviews appeared comfortable with being assessed based on impact factors: “People have to quantify me by something. So impact factor is a very important way to do that.” However, a focus groups participant recognised that impact factors are usually meaningless when considering real-world impacts: “I’ve been working together with senior executives in the government and federal government. They don’t care about that [journal impact factor], they only want you to give them a half-page summary.”</p><p class="paragraph">A focus group participant gave a perspective on impact factors that was pragmatic and confessional, “Considering and admitting for everybody, for various reasons, usually go for a top ranked journal in its field, and everything, and some of that will be purely mercenary, because that’s what’s required.” Personal values are ceded to the reward systems that use impact factors and/or journal ranking. We aimed to distinguish researchers with a stronger focus on system requirements by asking if they had a target number of publications per year, and 53% had a personal and/or institutional target. However, having a target did not greatly alter researchers’ preferences (Figure 1). Potentially most researchers are “playing the game” and the preference for journal ranking remains high regardless of the desired publication numbers [15].</p><p class="paragraph">A surprising result was the lack of difference in researchers’ preferences for papers that were useful for promotion by experience and publication numbers (Figure 1). This could be because the competition for funding and promotion never ends and researchers are always looking to earn academic currency. Tenured or retired professors may be under less pressure [16] and a professor from the focus groups commented, “I am the least strategic person when it comes to publishing but I think that also comes with seniority as I have no need to ever write a promotion application again!”</p><p class="paragraph">Survey participants were randomised to a scenario where their hypothetical paper had not yet been submitted to a journal or had already been desk-rejected twice (Box 1). This was raised in the focus groups, with comments including: “But then, after many rejections, right? You just want to get it out”. However, in the survey the previous rejections had no effect as researchers’ preferences were remarkably similar (Figure 1). Researchers’ preferences may be impervious to rejection, as the logical approach is to continue to pursue the highest impact factor possible. Preferences may change with more than two rejections or if the rejections were after peer review rather than desk-rejections.</p><p class="paragraph">The lowest utility was for an editor’s request of formatting changes compared with cutting a table and analysis. On average, researchers preferred not to cut their analysis, but this was less of priority than the impact factor, formatting at the submission stage, or the speed of the peer review. In the latent class analysis, the group with the strongest preference for impact factor had a surprising preference for cutting results (Figure 2), showing a willingness to compromise on their evidence to get published in prestigious journals [11]. This compromise was also discussed in our focus groups as a likely trade-off during the peer review process: “I certainly have examples where I have cut things out of papers to try and get something published.” Cutting results has also been discussed in the literature, for example: “Academics who play the ‘publish or perish’ game have a strong incentive to […] accept all ‘suggestions’ by the referees even if one knows that they are misleading or even incorrect” [17], and how during peer review “authors […] remove ideas and insights that they believe in from their work” [18]. To the best of our knowledge, our survey is the first to empirically show this compromise. An important implication is that the journals with the highest impact factors potentially have the most partial evidence, as researchers are more willing to “hold their nose” to satisfy the editors at influential journals [8]. One could argue that the journals were correct, and that the cuts improved the paper. However, in the scenario we told researchers “you believe it [your paper] is good quality” and the cut was 1,000 out of 4,000 words and included a table. Some researchers potentially rationalised this compromise by thinking that the removed results could be included in a supplement, but this relegates their findings at the “whim” of an editor [19].</p><p class="paragraph">An interesting finding from the focus groups and the survey is that researchers showed a relatively strong preference for helpful reviews and were willing to wait longer for helpful reviews. For example, an interview respondent said, “If there’s something that can improve them [my papers], I want them to be improved.” The preference for helpful reviews did not change by the researchers’ experience or number of publications (Figure 1), so it was not restricted to early career researchers. The latent group analysis showed that the second largest group most preferred a helpful review (Figure 2). The relatively strong preference for helpful reviews shows clear support for peer review, as many researchers want the expertise of their peers. Similarly, an international survey on the perception of peer review found that 93% disagree with the claim that peer review is unnecessary and 85% believe that peer review benefits scientific communication [20].</p><h3>Related studies</h3><p class="paragraph">Previous studies have examined researchers’ publication preferences using hypothetical journal choices. Similar to our results, the journal’s impact factor dominated preferences compared with the journal’s editorial board, journal’s standing among peers, quality of reviews, waiting time for reviews, and probability of being accepted [21]. Journal prestige, described using “journal level”, was also the most important attribute to junior authors in a conjoint analysis that compared journal prestige, author numbers, author order, and researchers’ time investment [22]. A choice-set survey found that researchers were willing to trade citations for a more prestigious journal [23].</p><p class="paragraph">A discrete choice experiment examined what metrics academics use when choosing papers to read [24]. There were clear preferences for citation counts, followed by the journal impact factor and download counts.</p><h3>Limitations</h3><p class="paragraph">Our discrete choice experiment was hypothetical and examined stated preferences not revealed preferences.<br>The low response rate (8.5%) reduces our ability to generalise and likely creates a non-response bias. Our approach email included words such as “journal” and “publishing” and so may have appeared similar to the many nuisance journal requests that researchers regularly receive and may have been automatically or manually deleted.</p><p class="paragraph">Respondents to our survey could be more engaged about the publication process than the wider population. We found a difference in response rate by country, hence our results over-represent some countries.</p><h2>Methods</h2><h3>Designing the discrete choice experiment</h3><p class="paragraph">We used a discrete choice experiment to examine researchers’ publication preferences as this is well-suited to testing the multiple trade-offs that researchers make when publishing papers.</p><p class="paragraph">We used multiple stages to design and deploy the discrete choice experiment (see Figure 4 and Supplement S.6 for details). With the aim of considering a wide array of attributes, we started with a literature review of papers that examined one or more potential attributes. The review collected 77 potential attributes about publications, with most concerning the journal (e.g., impact factor), the impact (e.g., social media discussion), and paper’s characteristics (e.g., paper with novel findings).</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_4-1024x915.png" alt="" data-id="5945149d-074a-42a9-9311-44c9dde3c7aa"><figcaption class="wp-element-caption">Figure 4: The stages of designing and deploying the discrete choice experiment to elicit researchers’ publication preferences</figcaption></figure><p class="paragraph">We used focus groups and in-depth interviews with health researchers from Australian academic institutions to explore the most important attributes, collect new attributes, and test potential trade-offs. We recruited participants from our networks and maximised for variation in career stage, gender, and research field. We ran focus groups in clinical sciences (8 participants), public health and health services research (8 participants), and used interviews for the two participants in fundamental science as we did not have enough people for a focus group. We piloted the focus group with 9 participants from health services research. The focus groups and interviews sample sizes were arbitrary, being mostly determined by the number of interested participants.</p><p class="paragraph">We used a semi-structured interview guide with an adapted nominal group technique without consensus [25]. Participants were asked to imagine they had written a paper and were now thinking of submitting it to a journal. They were asked about the attributes they consider most important when submitting to a journal. Each participant talked through up to ten attributes with the group and explained their choices. The attributes mentioned were then added to an online survey and participants voted on their most important attributes, explaining the rationale for their choices. We analysed and selected the attributes using the five steps of attribute development with a distilling approach [26].</p><p class="paragraph">An initial design of eight attributes was tested using a thinking-aloud exercise with ten researchers [27]. Researchers were shown a choice task and were asked to discuss their thoughts aloud on whether: they had any comments on the content or wording; there were any levels that they struggled to understand or that seemed unrealistic; the gaps between any levels were too jarring or obvious; and there was anything missing. This exercise identified that an attribute on journal prestige was sometimes contradictory to an attribute on journal ranking, and hence the prestige attribute was removed.</p><h3>Attribute and level selection</h3><p class="paragraph">The final attributes and levels are in Table 3. In this section we explain the choices behind the attributes and levels, and explain the perceived importance of some attributes and why some attributes were excluded.</p><p class="paragraph">Table 3: The six attributes and their levels for the discrete choice experiment. The first column is a short label used to refer to the attributes.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_t3-1024x345.png" alt="" data-id="6b137755-50e4-4ff7-a513-950a9b7dedbc"><figcaption id="6b137755-50e4-4ff7-a513-950a9b7dedbc" class="decoration"></figcaption></figure><p class="paragraph">Journal impact factor was the most common attribute in the literature review and was also frequently mentioned in the focus groups and interviews. Participants suggested that its importance relied on self-serving purposes like job promotions, grants, and funding, but also it was perceived as a reflection of the excellence of the researcher and a way to quantify the worth of their work. Related to the impact factor was the idea of predatory journals, which raised strong feelings of aversion due to reputational damage (e.g., “I avoid them like the plague”). For the levels, we decided against numeric impact factors because these numbers vary by field [28], hence we used a relative field ranking of the highest, middle, and a journal without an impact factor, which could represent a new journal or a potentially predatory journal.</p><p class="paragraph">Formatting was often considered as a “painful” process. Concerns were mentioned about the time needed to fit a journal’s style requirements, and respondents wanted to avoid onerous systems. We used two simple levels of minor and major formatting.</p><p class="paragraph">Peer review was widely discussed, with researchers interested in the speed and quality of reviews. We framed both these attributes by what their colleagues had told them, as colleagues were an important source of information about prospective journals. We used the relative labels of “slow” and “fast” rather than numeric review times (e.g., 30 days) because average times vary by field [29].</p><p class="paragraph">The focus group discussions uncovered a new issue as some researchers raised experiences of being asked by a journal editor to cut results from their paper at the peer review stage. There were multiple potential reasons including to reduce the word count, to keep a “clean story”, to make the story “digestible”, to remove results that contradicted previous findings, or to remove findings that were not of interest to journals or colleagues. We included this as an attribute as it suited the tension we were aiming to test, being a trade-off between the loss of evidence from presenting an abridged version of the work against the potential benefit of earning a publication. A difference between this attribute and the others is that it occurs post-submission.</p><p class="paragraph">The final attribute was a direct appeal to personal benefit, as it concerned whether the paper was useful or not for their next promotion or fellowship application. An example of a good quality paper that researchers might not use in a fellowship application is a “negative” study, where, for example, a new intervention or treatment did not work (often judged by the arbitrary statistical significance threshold of p &lt; 0.05). “Negative” studies can be less cited and receive less publicity than “positive” studies [30, 31], highlighting their reduced value as academic currency.</p><p class="paragraph">Article processing charges (APCs) were often discussed, but we excluded them as an attribute because they could often not be traded – for example, researchers with no budget to pay APCs. Using charges could have introduced a hypothetical bias, as researchers mostly do not personally pay the APCs and therefore the choices would be not be as meaningful [32].</p><p class="paragraph">Citations were a common attribute in the literature review, but focus group discussions revealed that these were seen as being beyond the control of the researchers and somewhat due to chance. Hence it would not be plausible to use varying citation numbers as attribute levels. Supporting this decision, a prospective study of journal editors found that citation counts were difficult to predict [33].</p><h3>Scenario</h3><p class="paragraph">The scenario in Box 1 was shown at the start of the survey and was repeated under every choice task.</p><p class="paragraph">The scenario framed the choice tasks and included some attributes of journal choice relevant for decision-making that: 1) could not be measured independently as they overlapped with other attributes, or 2) their importance was either relative across participants or deterministic. For example, the scope and readership of the journal were often mentioned in focus groups as one of the most important attributes. However, as researchers were strongly unwilling to submit to journals outside their scope, we added it to the scenario.</p><figure><figcaption id="" class=""><strong>Box 1: Scenario for the discrete choice experiment</strong><br>Imagine you have written a paper and are now trying to get it published in a journal.<br>Your paper contains original research and is around 4,000 words long with tables and figures. Your paper is relevant in your field and you believe it is good quality.<br>You will only consider journals that fit the scope of your paper and are read by your target audience. You have no previous experience with the journals (good or bad). You do not have any personal or professional relationships with the journal editors or publishers.<br>You are the first author and will make all decisions on behalf of your co-authors.<br><strong>Scenario 1 ending:</strong> Your paper has not yet been submitted to any journal.<br><strong>Scenario 2 ending:</strong> Your paper has been submitted and desk-rejected (rejected without peer reviews) by two journals.</figcaption></figure><p class="paragraph">The two scenario endings were created because in the focus groups some researchers mentioned how they might change behaviour after experiencing some rejections. To test this potential difference in the survey, researchers were randomised to view one or the other scenario ending in a 1:1 ratio.</p><p class="paragraph">Focus group participants mentioned that previous experiences with a journal, good or bad, would strongly influence their choices. To avoid this concern, the scenario stated that the researchers did not have any experience with the journal. Similarly we stated that they did not know the editorial staff, as this also influences researchers’ journal choices.</p><h3>Dominant task</h3><p class="paragraph">An example discrete choice task is shown in Figure 5. The choice tasks were unlabelled as the hypothetical journals were “A” and “B”. This example is the dominant choice task where “Journal A” is clearly the most desirable. It was used to examine whether respondents understood the task. It was shown as the first task to warm up respondents and was not used in the data analysis.</p><h3>Survey of discrete choice tasks</h3><p class="paragraph">The online survey started with a link to the participant information sheet (Supplement S.7) and asked researchers to indicate their consent. Fourteen respondents did not consent. Those who consented were shown the scenario (Box 1) and dominant task (Figure 5). Respondents next answered eight choice tasks. A final task was a repeat task of one of the eight. This was used to assess the stability of the participants’ responses based on the percentage of respondents that gave the same answer as the original task [34]. Differing answers could be due to learning effects or fatigue [34]. The repeat task was not used in the analysis.</p><p class="paragraph">The final section of the survey asked respondents if they found the choice tasks easy or difficult. We also gathered the following information from the respondents: their broad research area, gender, years of experience in research, number of published papers, country, and their perceived publication pressure. Lastly, the respondents could add optional comments. Respondents could skip any question. The complete survey is available from Supplement S.7.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_5-1024x539.png" alt="" data-id="62cb9a20-541f-4ed4-b47a-b155ac7ec676"><figcaption class="wp-element-caption">Figure 5: Example discrete choice task showing the attributes and levels. This is the dominant choice task where Journal A has the levels we assumed most respondents would prefer.</figcaption></figure><p class="paragraph">The NGene (version 13.0) software was used to select 24 pairwise choice tasks based on the D-error to give an efficient fractional design. This D-efficient design was developed using the Modified Federov algorithm to estimate a multinomial logit model. For the final D-efficient design, the weights were selected from the pilot test. The 24 choice tasks were divided into three blocks of eight. Using a fractional design maximised the design’s statistical efficiency, whilst giving a manageable number of choice tasks of ten: eight plus the dominant task and re-test.</p><h2>Statistical methods</h2><p class="paragraph">We used the panel mixed multinomial logit (pMMNL) model and the panel Latent Class Model (pLCM) for the main analysis. We also used the pMMNL model to examine whether preferences systematically differed based on respondents’ characteristics. Results are presented as mean utilities with 95% confidence intervals, and the estimated attribute importance [35]. Subgroup analyses were conducted using the following characteristics: years of experience, gender, number of publications, having a publication target, and the hypothetical paper’s prior rejection. The pLCM was used to capture non-systematic heterogeneity in preferences among respondents, assuming that differences in preferences manifest as discrete groups or latent classes [36]. The ideal number of classes was determined using the Akaike Information Criterion (AIC). A pLCM was used to assess task non-attendance, incorporating a “garbage class” to identify respondents who provided non-informative responses [37]. This approach enabled an evaluation of preference heterogeneity that distinguished between attentive and non-attentive participants.</p><p class="paragraph">Our data collection and analyses were preregistered in a study protocol [38]. The only change from our planned design was that we did not use the pre-notification email for most invites, as it did not appear to increase the response rate.</p><h3>Data and code availability</h3><p class="paragraph">Our R code and data are available on GitHub [39].</p><h3>Sample size</h3><p class="paragraph">Sample size formulae are not available for discrete choice experiments and estimates are often made using rules of thumb or simulations [40, 41]. We faced uncertainty in selecting plausible model parameters, with 1 to 2 parameters per discrete choice attribute and no similar prior studies. Hence our final sample size was based on a pilot. Pilot testing has been recommended to inform sample size calculations for complex interventions [42].</p><p class="paragraph">We analysed the pilot data of 51 respondents to inform the final design. The required sample size based on minimising the D-error was 309. Both the pilot and final design had 24 choice tasks in three blocks of eight. The attributes and levels were the same in the pilot and final design, hence we combined respondents from the pilot and final surveys in our analyses.</p><h3>Sampling frame</h3><p class="paragraph">Our target population was current health and medical researchers. We approached this population by creating a sampling frame of researchers extracted from papers on the PubMed database, which is a widely used search engine that contains the MEDLINE database of published papers in life sciences and biomedical topics [43]. To capture current researchers we restricted the search from the year 2022 onwards. We used the “publication type” search field to exclude non-research papers like obituaries. We only extracted researchers who had an email available. The search was conducted on 11 April 2024.</p><p class="paragraph">The search returned over 140,000 papers, which we randomly re-ordered and iteratively extracted no more than one unique email per paper until we had a sample of 9,000 researchers. Randomly selected researchers from the sampling frame were sent an initial email with reminders one and two weeks later.</p><h2>Additional information</h2><h3>Contributions</h3><p class="paragraph">Conceptualization: NGB, SW, DB, SS, SK and AB.<br>Methodology: NGB, SS and AB.<br>Software: SS and AB.<br>Formal analysis: NGB, SS and AB.<br>Investigation: NGB, SW, DB, SS, SK and AB.<br>Data curation: AB.<br>Visualization: AB.<br>Writing—original draft: AB.<br>Writing—review and editing: NGB, SS, DB, SW, SK.<br>Funding acquisition: DB, SS, SK and AB.</p><h3>Ethics declarations</h3><p class="paragraph">The focus groups and interviews were approved by the Queensland University of Technology Human Research Ethics committee (Date: 18 April 2023, number: LR 2023-6685-13695). The survey was approved by the Queensland University of Technology Human Research Ethics committee (Date: 5 March 2024, number: LR 2024-8188-18148).</p><h3>Funding</h3><p class="paragraph">This work received funding from an internal grant from the Centre for Healthcare Transformation at Queensland University of Technology.</p><h2>References</h2><p class="paragraph">[1] Génova, Gonzalo, Astudillo, Hern´an, and Fraga, Anabel. “The Scientometric Bubble Considered Harmful”. In: Science and Engineering Ethics 22.1 (Feb. 2015), pp. 227–235. doi: 10.1007/s11948-015-9632-6.<br>[2] Schimanski, Lesley A. and Alperin, Juan Pablo. “The evaluation of scholarship in academic promotion and tenure processes: Past, present, and future”. In: F1000Research 7 (Oct. 2018), p. 1605. doi: 10.12688/f1000research.16493.1.<br>[3] Rice, Danielle B et al. “Academic criteria for promotion and tenure in biomedical sciences faculties: cross sectional analysis of international sample of universities”. In: BMJ 369 (2020). doi: 10.1136/bmj.m2081.<br>[4] Dawes, Martin et al. “Sicily statement on evidence-based practice”. In: BMC Medical Education 5.1 (Jan. 2005). doi: 10.1186/1472-6920-5-1.<br>[5] Smaldino, Paul E. and McElreath, Richard. “The natural selection of bad science”. In: Royal Society Open Science 3.9 (Sept. 2016), p. 160384. doi: 10.1098/rsos.160384.<br>[6] Merton, R.K. and Storer, N.W. The Sociology of Science: Theoretical and Empirical Investigations. Phoenix books. University of Chicago Press, 1973. isbn: 9780226520926.<br>[7] Binswanger, Mathias. “Excellence by Nonsense: The Competition for Publications in Modern Science”. In: Opening Science. Springer International Publishing, Dec. 2013, pp. 49–72. isbn: 9783319000268. doi: 10.1007/978-3-319-00026-8_3.<br>[8] Maggio, Lauren A. et al. ““The best home for this paper”: A qualitative study of how authors select where to submit manuscripts”. In: (May 2024). doi: 10.1101/2024.05.14.594165.<br>[9] Anderson, Melissa S. et al. “The Perverse Effects of Competition on Scientists’ Work and Relationships”. In: Science and Engineering Ethics 13.4 (Nov. 2007), pp. 437–461. doi: 10.1007/s11948-007-9042-5.<br>[10] Onstad, David W and Sime, Karen R. “The ethical and social effects of the obsession over Journal Impact Factor”. In: Annals of the Entomological Society of America 117.3 (Mar. 2024). Ed. by Matt Hudson, pp. 160–162. doi: 10.1093/aesa/saae013.<br>[11] Casadevall, Arturo and Fang, Ferric C. “Causes for the Persistence of Impact Factor Mania”. In: mBio 5.2 (2014), 10.1128/mbio.00064–14. doi: 10.1128/mbio.00064-14.<br>[12] Falagas, Matthew E. and Alexiou, Vangelis G. “The top-ten in journal impact factor manipulation”. In: Archivum Immunologiae et Therapiae Experimentalis 56.4 (July 2008), pp. 223–226. doi: 10.1007/s00005-008-0024-5.<br>[13] Pitt, Rachael and Mewburn, Inger. “Academic superheroes? A critical analysis of academic job descriptions”. In: Journal of Higher Education Policy and Management 38.1 (2016), pp. 88–101. doi: 10.1080/1360080X.2015.1126896.<br>[14] Hrynaszkiewicz, Iain et al. “A survey of how biology researchers assess credibility when serving on grant and hiring committees”. In: (Mar. 2024). doi: 10.31222/osf.io/ht836.<br>[15] Chapman, Colin A. et al. “Games academics play and their consequences: how authorship, h-index and journal impact factors are shaping the future of academia”. In: Proceedings of the Royal Society B: Biological Sciences 286.1916 (2019), p. 20192047. doi: 10.1098/rspb.2019.2047.<br>[16] Niles, Meredith T. et al. “Why we publish where we do: Faculty publishing values and their relationship to review, promotion and tenure expectations”. In: PLOS ONE 15.3 (Mar. 2020), pp. 1–15. doi: 10.1371/journal.pone.0228914.<br>[17] Frey, Bruno S., Eichenberger, Reiner, and Frey, Ren´e L. “Editorial Ruminations: Publishing Kyklos”. In: Kyklos 62.2 (Apr. 2009), pp. 151–160. doi: 10.1111/j.1467-6435.2009.00428.x.<br>[18] Eisen, Michael B et al. “Peer review without gatekeeping”. In: eLife 11 (Oct. 2022). doi: 10.7554/elife.83889.<br>[19] Schmid, Sandra L. “Five years post-DORA: promoting best practices for research assessment”. In: Molecular Biology of the Cell 28.22 (Nov. 2017). Ed. by Doug Kellogg, pp. 2941–2944. doi: 10.1091/mbc.e17-08-0534.<br>[20] Ware, Mark. “Peer review in scholarly journals: Perspective of the scholarly community–Results from an international study”. In: Information Services &amp; Use 28.2 (2008), pp. 109–112.<br>[21] Rousseau, Sandra and Rousseau, Ronald. “Interactions between journal attributes and authors’ willingness to wait for editorial decisions”. In: Journal of the American Society for Information Science and Technology 63.6 (Mar. 2012), pp. 1213–1225. doi: 10.1002/asi.22637.<br>[22] Krasnova, Hanna et al. “Publication Trade-Offs for Junior Scholars in IS: Conjoint Analysis of Preferences for Quality, First Authorship, Collaboration, and Time”. In: Proceedings of the International Conference on Information Systems (ICIS). 2014.<br>[23] Salandra, Rossella, Salter, Ammon, and Walker, James T. “Are Academics Willing to Forgo Citations to Publish in High-Status Journals? Examining Preferences for 4* and 4-Rated Journal Publication Among UK Business and Management Academics”. In: British Journal of Management 33.3 (May 2021), pp. 1254–1270. doi: 10.1111/1467-8551.12510.<br>[24] Lemke, Steffen, Mazarakis, Athanasios, and Peters, Isabella. “Conjoint analysis of researchers’ hidden preferences for bibliometrics, altmetrics, and usage metrics”. In: Journal of the Association for Information Science and Technology 72.6 (2021), pp. 777–792. doi: https://doi.org/10.1002/asi.24445.<br>[25] Bohorquez, Natalia Gonzalez et al. “Attribute Development in Health-Related Discrete Choice Experiments: A Systematic Review of Qualitative Methods and Techniques to Inform Quantitative Instruments”. In: Value in Health (June 2024). doi: 10.1016/j.jval.2024.05.014.<br>[26] Bohorquez, Natalia Gonzalez et al. “Enhancing Health Preferences Research: Guidelines for Qualitative Attribute Development in Stated Preference Studies”. In: OSF (July 2024). url: https://osf.io/g9jbt.<br>[27] Leighton, J.P. Using Think-Aloud Interviews and Cognitive Labs in Educational Research.<br>Understanding Qualitative Research. Oxford University Press, 2017. isbn: 9780199372911.<br>[28] Althouse, Benjamin M. et al. “Differences in impact factor across fields and over time”. In: Journal of the American Society for Information Science and Technology 60.1 (Dec. 2008), pp. 27–34. issn: 1532-2890. doi: 10.1002/asi.20936. url: http://dx.doi.org/10.1002/asi.20936.<br>[29] Publons. 2018 Global state of peer review series. 2018. doi: 10.14322/publons.GSPR2018. url: https://publons.com/static/Publons-Global-State-Of-Peer-Review-2018.pdf.<br>[30] Greenberg, S. A. “How citation distortions create unfounded authority: analysis of a citation network”. In: BMJ 339.jul20 3 (July 2009), b2680. doi: 10.1136/bmj.b2680.<br>[31] Koren, Gideon. “Bias Against Negative Studies in Newspaper Reports of Medical Research”. In: JAMA: The Journal of the American Medical Association 266.13 (Oct. 1991), p. 1824. doi: 10.1001/jama.1991.03470130104037.<br>[32] Hensher, David A. “Hypothetical bias, choice experiments and willingness to pay”. In: Transportation Research Part B: Methodological 44.6 (July 2010), pp. 735–752. doi: 10.1016/j.trb.2009.12.012.<br>[33] Schroter, Sara et al. “Evaluation of editors’ abilities to predict the citation potential of research manuscripts submitted to The BMJ: a cohort study”. In: BMJ 379 (2022). doi: 10.1136/bmj-2022-073880.<br>[34] Ozdemir, Semra et al. “Who pays attention in stated-choice surveys?” In:¨ Health Economics 19.1 (Mar. 2009), pp. 111–118. doi: 10.1002/hec.1452.<br>[35] Gonzalez, Juan Marcos. “A Guide to Measuring and Interpreting Attribute Importance”. In: The Patient - Patient-Centered Outcomes Research 12.3 (Mar. 2019), pp. 287–295. doi: 10.1007/s40271-019-00360-3.<br>[36] Greene, William H. and Hensher, David A. “A latent class model for discrete choice analysis: contrasts with mixed logit”. In: Transportation Research Part B: Methodological 37.8 (2003), pp. 681–698. doi: https://doi.org/10.1016/S0191-2615(02)00046-2.<br>[37] Gonzalez, Juan Marcos, Johnson, F. Reed, and Finkelstein, Eric. “To pool or not to pool: Accounting for task non-attendance in subgroup analysis”. In: Journal of Choice Modelling 51 (2024), p. 100487. doi: https://doi.org/10.1016/j.jocm.2024.100487.<br>[38] Barnett, Adrian G et al. Study protocol: A discrete choice experiment to examine researchers’ publication preferences: an international cross-sectional survey. Mar. 2024. doi: 10.17605/OSF.IO/P9GUJ. url: https://doi.org/10.17605/OSF.IO/P9GUJ.<br>[39] Barnett, Adrian G. Code and data for a discrete choice experiment of authors’ preferences. July 2024. doi: 10.5281/zenodo.12814359. url:https://github.com/agbarnett/publication_preferences.<br>[40] Lancsar, Emily and Louviere, Jordan. “Conducting Discrete Choice Experiments to Inform Healthcare Decision Making: A User’s Guide”. In: PharmacoEconomics 26.8 (2008), pp. 661–677. doi: 10.2165/00019053-200826080-00004.<br>[41] Reed Johnson, F. et al. “Constructing Experimental Designs for Discrete-Choice Experiments: Report of the ISPOR Conjoint Analysis Experimental Design Good Research Practices Task Force”. In: Value in Health 16.1 (Jan. 2013), pp. 3–13. doi: 10.1016/j.jval.2012.08.2223.<br>[42] Lancaster, GA et al. “Trials in primary care: statistical issues in the design, conduct and evaluation of complex interventions”. In: Statistical Methods in Medical Research 19.4 (May 2010), pp. 349–377. doi: 10.1177/0962280209359883.<br>[43] Sayers, Eric W et al. “Database resources of the national center for biotechnology information”. In: Nucleic Acids Research 50.D1 (Dec. 2021), pp. D20–D26. doi: 10.1093/nar/gkab1112. url: http://dx.doi.org/10.1093/nar/gkab1112.</p><h2>Supplementary material</h2><h3>S.1 Survey responses over time</h3><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_s1-1024x855.png" alt="" data-id="35c10b14-d738-47b8-ba4f-1c921fa2ffc9"><figcaption class="wp-element-caption">Figure S.1: Cumulative number of survey responses over time for the pilot and final design.</figcaption></figure><h3>S.2 Classification tree predicting survey response</h3><p class="paragraph">Table S.1: Results of the classification tree using email domain.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_s2-1024x344.png" alt="" data-id="2cc1239b-562d-41f1-993c-d10febdb1b64"><figcaption id="2cc1239b-562d-41f1-993c-d10febdb1b64" class="decoration"></figcaption></figure><p class="paragraph">We used a classification tree to predict survey response (yes/no) based on the researchers’ email domain (a proxy for country, e.g., au = Australia), and whether the researcher’s affiliation mentioned the words “Hospital”, “Dentist*” or “University”. The classification tree had three leaves with a cross-validated error of 0.990 with a standard error of 0.034. The tree only used the email domain, but found a relatively large difference in response proportions. We present the results as a table instead of a plotted tree as the number of email domains makes the plot cluttered.</p><h3>S.3 Item-missing data</h3><p class="paragraph">The plot below shows item missing data by question number. The missing data patterns are clustered by similarity. The question numbers are presented in order. There is evidence of survey fatigue as the percent missing increases from left-to-right.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_s3-1024x654.png" alt="" data-id="a6751daa-68da-4b49-8298-c42cc1d1bb9e"><figcaption class="wp-element-caption">Figure S.2: Item missing data for the 616 survey responses. The column headings show the question number and percent missing. The panel on the right shows the questions for each question number.</figcaption></figure><h3>S.4 Respondents’ countries</h3><p class="paragraph">Table S.2: Number and percent of responses by country. There were 63 countries in total.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_s4-1017x1024.png" alt="" data-id="05ae2ae9-fc81-4069-8b8b-6b173a95344a"><figcaption id="05ae2ae9-fc81-4069-8b8b-6b173a95344a" class="decoration"></figcaption></figure><h3>S.5 Attribute interactions</h3><p class="paragraph">Table S.3: Utility estimates and 95% confidence intervals for the planned interactions between attributes. The interactions are plotted in Figure 3. This table shows only the interaction terms and not the main effects. These results help judge the null hypothesis of whether there was no interaction.</p><figure><img src="https://cms.metaror.org/wp-content/uploads/2024/11/12_s5-1024x343.png" alt="" data-id="b2c9d6e8-5814-4595-b3f1-a826050eacbe"><figcaption id="b2c9d6e8-5814-4595-b3f1-a826050eacbe" class="decoration"></figcaption></figure><h3>S.6 Details on the discrete choice experiment design</h3><p class="paragraph">This additional file includes details on the literature review, focus groups and interviews, and thinking aloud exercise. It is available here: https://osf.io/gjch7.</p><h3>S.7 Participant information sheet and survey questions</h3><p class="paragraph">The online version of the participant information sheet is available here https://osf.io/p9guj/wiki/home/.</p><p class="paragraph">A PDF version of the survey is available here https://osf.io/j7mce. The survey was delivered online using Qualtrics.</p><p class="paragraph">The survey questions differed by two questions between the pilot and final survey as we altered the question that aimed to examine researcher’s publishing expectations. This is because for the original question – “My department’s or research group’s expectations with respect to publishing are reasonable” – 81% responded as “Agree” or “Strongly agree” creating limited variance between respondents. Hence in the main survey we asked researchers if they had an annual publication target and what it was.</p>
        `,
    },
  },
}

document.addEventListener('DOMContentLoaded', () => {
  const $contentSection = document.querySelector('#content-section')
  const $content = document.querySelector('#content')
  const $authorsList = document.querySelector('#author-links')
  const tabs = document.querySelectorAll('.tab')
  const $doi = document.querySelector('#doi')
  const $title = document.querySelector('#title')
  const $articleNav = document.querySelector('#article-nav > ul')
  const $publishedOn = document.querySelector('.published-on')
  const $reviewSection = document.querySelector('#reviews-section')
  const $dates = document.querySelectorAll('.dateblock')

  const handleTabChange = e => {
    const tab = e.target
    tabs.forEach(tab => tab.classList.remove('active'))
    tab.classList.add('active')
    tab.textContent !== 'Preprint' && ($contentSection.style.display = 'none')
    tab.textContent !== 'Reviews' && ($reviewSection.style.display = 'none')
    tab.textContent === 'Preprint' && ($contentSection.style.display = 'flex')
    tab.textContent === 'Reviews' && ($reviewSection.style.display = 'flex')
    const url = new URL(window.location)
    url.searchParams.set('tab', tab.textContent.toLowerCase())
    window.history.pushState({}, '', url)
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', handleTabChange)
  })

  const urlParams = new URLSearchParams(window.location.search)
  const tabParam = urlParams.get('tab')

  if (!tabParam || !['preprint', 'reviews'].includes(tabParam)) {
    handleTabChange({ target: tabs[0] })
  } else {
    const activeTab = Array.from(tabs).find(
      tab => tab.textContent.toLowerCase() === tabParam,
    )

    if (activeTab) {
      handleTabChange({ target: activeTab })
    }
  }

  const articleNumber = getArticleNumberFromURL()
  const manuscript = manuscriptData[articleNumber]
  const { doi, sections, title, authors, published, reviews, dates } = manuscript

  $authorsList.innerHTML = authors
    .map(author => `<a href="#">${author.name},</a>`)
    .join('')

  published && ($publishedOn.textContent = published)
  title && ($title.textContent = title)
  doi && ($doi.textContent = `https://doi.org/${doi}`)
  doi && ($doi.href = `https://doi.org/${doi}`)
  articleNumber && ($content.innerHTML = '')
  $dates.forEach(date => {
  const dateContent = Object.entries(dates).map(([k, v]) => {
   return`<div class="date-block"><p>${k}:</p><span>${v}</span></div>`
})
    console.log(dateContent)
    console.log($dates)
    date.innerHTML = dateContent.join('')
})
    

  reviews.forEach(({ name, orcid, review }) => {
    const reviewEl = document.createElement('div')
    reviewEl.innerHTML = `<h4>${name}</h4><p>${orcid}</p>${review}`
    $reviewSection.appendChild(reviewEl)
  })

  Object.entries(sections).forEach(([k, v]) => {
    const sectionContent = document.createElement('p')
    sectionContent.innerHTML = v
    if(k !== 'rest'){
        const title = document.createElement('h2')
        title.textContent = k
        title.id = k
        $content.appendChild(title)
        !Object.keys(sections).includes('rest') && ($articleNav.innerHTML += `<li><a href="#${k}">${k}</a></li>`)
    }
    $content.appendChild(sectionContent)
    
    if(k === 'rest'){
        const headings = $content.querySelectorAll('h2')
        headings.forEach(h2 => {
            const id = h2.textContent
            h2.id = id
            $articleNav.innerHTML += `<li><a href="#${id}">${id}</a></li>`
        })
    } 
  })

  
})
