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
        reviewer: {
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
      },
      {
        reviewer: {
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
        }
      },
      {
        reviewer: {
          name: 'Olmo R. van den Akker',
          orcid: '0000-0002-0712-3746',
          review: splitTextIntoParagraphs(`
          missing!!
          `)
        }
      },
      {
        reviewer: {
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
        }
      },
    ],
    authors: [
      {
        name: 'Dmitry Kochetkov',
        affiliations: [],
      },
    ],
    sections: article9Sections,
  },
  12: {
    meta: {
      doi: '',
      reviews: [],
      authors: [
        {
          name: '',
          reviewNumber: 1,
        },
      ],
    },
    fullText: {
      sections: {
        abstract: '',
      },
    },
    peerReview: '',
  },
  13: {
    meta: {
      doi: '',
      reviews: [],
      authors: [
        {
          name: '',
          reviewNumber: 1,
        },
      ],
    },
    fullText: {
      sections: {
        abstract: '',
      },
    },
    peerReview: '',
  },
  14: {
    meta: {
      doi: '',
      reviews: [],
      authors: [
        {
          name: '',
          reviewNumber: 1,
        },
      ],
    },
    fullText: {
      sections: {
        abstract: '',
      },
    },
    peerReview: '',
  },
  15: {
    meta: {
      doi: '',
      reviews: [],
      authors: [
        {
          name: '',
          reviewNumber: 1,
        },
      ],
    },
    fullText: {
      sections: {
        abstract: '',
      },
    },
    peerReview: '',
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

  const handleTabChange = e => {
    const tab = e.target
    tabs.forEach(tab => tab.classList.remove('active'))
    tab.classList.add('active')
    tab.textContent !== 'Preprints' && ($contentSection.style.display = 'none')
    tab.textContent !== 'Review' && ($reviewSection.style.display = 'none')
    tab.textContent === 'Preprints' && ($contentSection.style.display = 'flex')
    tab.textContent === 'Review' && ($reviewSection.style.display = 'flex')
    const url = new URL(window.location)
    url.searchParams.set('tab', tab.textContent.toLowerCase())
    window.history.pushState({}, '', url)
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', handleTabChange)
  })

  const urlParams = new URLSearchParams(window.location.search)
  const tabParam = urlParams.get('tab')

  if (!tabParam) {
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
  const { doi, sections, title, authors, published, reviews } = manuscript

  $authorsList.innerHTML = authors
    .map(author => `<a href="#">${author.name}</a>`)
    .join(', ')

  published && ($publishedOn.textContent = published)
  title && ($title.textContent = title)
  doi && ($doi.textContent = `https://doi.org/${doi}`)
  doi && ($doi.href = `https://doi.org/${doi}`)
  articleNumber && ($content.innerHTML = '')

  reviews.forEach(review => {
    const reviewEl = document.createElement('div')
    reviewEl.innerHTML = `
            <h4>${review.reviewer.name}</h4>
            <p>${review.reviewer.orcid}</p>
            ${review.reviewer.review}
        `
    $reviewSection.appendChild(reviewEl)
  })

  Object.entries(sections).forEach(([k, v]) => {
    const title = document.createElement('h3')
    const sectionContent = document.createElement('p')
    title.id = k
    title.textContent = k
    sectionContent.innerHTML = v
    $content.appendChild(title)
    $content.appendChild(sectionContent)
    $articleNav.innerHTML += `<li><a href="#${k}">${k}</a></li>`
  })
})
