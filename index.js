const getArticleNumberFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('manuscript');
}

const renderImage = (num, fig, alt = '') => {
    return `<img src="./assets/article-${num}/fig${fig}.png" alt="${alt}" /><figcaption>${alt}</figcaption>`;
}
const generateOrderedList=(items) => {
    let ol = '<ol>';
    items.forEach(item => {
        ol += `<li>${item}</li>`;
    });
    ol += '</ol>';
    return ol;
}
const generateUnorderedList=(items) => {
    let ul = '<ul>';
    items.forEach(item => {
        ul += `<li>${item}</li>`;
    });
    ul += '</ul>';
    return ul;
}

const article9Sections = {
    Abstract: /* html */ `
    <p>It is traditionally believed that peer review is the backbone of anacademicjournal and scientific communication, ensuringhigh quality and trust in the published materials. However, peer review only became an institutionalized practice in the second half of the 20th century, although the first scientific journals appeared three centuries earlier. By the beginning of the 21st century, there emerged an opinion that the traditional model of peer review is in deep crisis. This study aims to synthesize thekeycharacteristics, practices, and outcomes of traditional and innovative peer review models in scholarly publishing.The article discusses the evolution of the institution of scientific peer review and the formation of the current crisis. Weanalyzethe modern landscape of innovations in peer review and scientific communication. Based on this analysis, three main peer review models in relation to editorial workfloware identified: pre-publication peer review (traditional model), registered reports,and post-publication (peer)review (including preprints(peer) review). Wearguethatthe third model offers the best way to implementthe main functions of scientific communication.Keywords:scientific communication, academicjournal, peer review, pre-publication peer review, prereview, post-publication review, preprints, registered reports</p>
    `,
    Introduction: /* html */ `
    <p>International journals often require additional assessment of the level of English. However, this is not a comprehensive list, and the list of criteria to be evaluated may vary from journal to journal. Nevertheless, as early as the beginning of the 21st century, it was argued that the system of peer review is "broken" (McCook, 2006). The main problem noted by McCook is the increasing number of manuscripts and the burden on reviewers. However, this is just the tip of the iceberg. Allen et al. (2022) highlighted the issue of the "black box": the anonymity of traditional peer review should maintain honesty and ethical norms, but it also can stifle discussion, generate biases, and reduce the overall effectiveness of peer review. In fact, the function of being the "supreme judge" in deciding what is "good" and "bad" science is taken on by peer review, defending the dominant scientific paradigm and stifling the emergence of new ideas that always arise on the periphery. However, as academician L.I. Abalkin once remarked, "no one has the right to usurp the truth" (Sukharev, 2020, p. 44). If we do not change our approach, science will either stagnate or transition into other forms of communication. Moreover, the current system has become an "exploitation machine": publishers benefit in most cases, while reviewers work voluntarily. There is a point of view that peer review is included in the implicit contract of the researcher. Nevertheless, given that most of the research and, accordingly, research positions are funded from public funds, we nonetheless observe a tendency to "reap where they did not sow." R. Smith (2006) strongly criticized the review while at the same time comparing it to democracy: "a system full of problems but the least worst we have" (p. 178). Is this really the case? And can we talk about peer review as a uniform concept, given the variety of existing models? This study aims to synthesize the key characteristics, practices, and outcomes of traditional and innovative peer review models in scholarly publishing. In the following section, we will attempt to demonstrate how the traditional peer review model has developed and how it has come to the current crisis. Furthermore, we will discuss possible ways to overcome the crisis and how the institution of peer review is evolving in the context of global changes in scientific publishing. A separate section discusses modular publishing, which incorporates various innovations in the publishing process, and in particular, the review process. The scope of this piece is limited to peer review in the context of the publication of scientific articles, but its findings are quite applicable to the publication of books or conference proceedings. At the same time, review for other purposes, e.g., evaluation of grant applications, is a topic for a separate discussion</p>
    `,
    'Evolution and crisis of peer review': /*html*/ `
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
${renderImage(9, 1, 'Figure 1: Evolution of peer review models in scientific communication')}
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
    "The rapidly growing volume of manuscripts, coupled with an increasing workload for researchers and faculty, leads to a shortage of reviewers. The primary reason for declining to review is the simple lack of time (Tite & Schroter, 2007; Willis, 2016). This issue causes extension of review periods and frustration of authors.",
    "The shortage of reviewers forces journals to expand their search. Sometimes, this results in manuscripts being reviewed by researchers who do not possess sufficient expertise in the subject. Several studies have noted a low level of consensus among reviewers (Bornmann, 2011), leading some research to refer to peer review as a “game of chance” (Neff & Olden, 2006). The low level of peer review also contributes to the crisis of reproducibility in scientific research (Stoddart, 2016). Although this crisis is due to a multitude of factors, the peer review system bears a significant responsibility for it.",
    "The current peer review system exacerbates inequality in science. Bias often hides behind anonymity, creating a 'black box' problem. Despite constant calls for equality and inclusivity in science (COPE, 2021), a few groups still dominate scientific periodicals, such as male authors from the United States and the United Kingdom. O. M. Smith et al. (2023) analyzed 300,000 manuscripts in biological sciences and concluded that authors from historically excluded communities face worse outcomes in peer review, and journal efforts to eliminate reviewer bias have not yet been successful. Nevertheless, we must recognize the debatable nature of this issue. For instance, Squazzoni et al. (2021) found no systematic bias against manuscripts submitted by women in the peer review process, with some evidence of favorable treatment for women in certain fields. Walker et al. (2015) found that the gender of the author and the characteristics of the author's institution had a significant impact on the review outcomes. However, it is impossible to determine whether this was due to objective differences in scientific merit or to biases.",
    "Continuing from point 3, peer review is also often seen to protect widely accepted approaches and concepts to the detriment of novelty. Peer review can inadvertently stifle innovation and radical new ideas (Steinhauser et al., 2012). The process tends to favor established concepts and discourage the publication of unusual or disparate discoveries (Hess, 1975). As a result, it may limit opportunities for game-changing scientific discoveries (Braben & Dowler, 2017). The neoclassical school in economics may be seen as an example of this phenomenon. The crisis of the neoclassical school began in the early 21st century (Williams & McNeill, 2005), partly due to the inability to explain the global financial crisis of 2008 (Keen, 2015). However, a paradigm shift has still not occurred - the neoclassical school still occupies a central position in the economic science (and the policies of many countries).",
    "Finally, the current form of peer review is simply inefficient. On the one hand, long peer review slows down the process of disseminating new knowledge (see point 1), and on the other hand, often a large number of reviews are required for a single article. The reason for this is that when authors receive a rejection from one journal, they often submit the same article to another journal, starting the entire process anew. Aczel et al. (2021) found that in 2021, reviewers worldwide spent over 100 million hours, equivalent to more than 15,000 years. If we evaluate this time in terms of money, the cost for reviewers in the USA amounted to over $1.5 billion, in China over $600 million, and in the UK around $400 million. Therefore, peer review is a quite costly activity, and currently, doubts arise regarding the efficiency of its utilization."
])}
    `,
    'Innovations in peer review': /*html*/ `
    <p>We have demonstrated the current crisis of the traditional peer review model. In this regard, the
question arises about the possible ways to overcome the crisis. Recently, a lot of literature has
been published on innovations in the field of peer review (see reviews by Kaltenbrunner et al.,
2022; Woods et al., 2022). Waltman et al. (2023) classified innovations in peer review into four
"schools of thought." We propose adding a parameter to this typology that will characterize
innovations relative to the currently dominant publication workflow (incremental / radical). It
enables creation of a two-factor matrix (Table 1).</p>
${renderImage(9, 2, 'Source: compiled by the author based on Waltman et al. (2023).')}
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
${renderImage(9, 3, 'Figure 2: Registered reports - publication workflow (Model 2).')}
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
${renderImage(9, 5, 'Figure 3: “Publish-Review-Curate” model (Model 3). Model 3a involves uploading the manuscript directly to a platform (e.g., F1000Research). Model 3b, on the other hand, involves initially posting a preprint on a preprint server followed by peer review on a peer review platform (e.g., eLife and Peer Community in).')}
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
    'Modular Publishing': /*html*/ `
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
    'Discussion and Conclusion': /*html*/ `
    <p>In the previous sections, we briefly examined the evolution of the peer review and its current
crisis in relation to scientific communication. Next, we explored the main innovations in peer
review, which can be classified according to the course of proposed changes and the degree of
influence on the editorial workflow, incremental and radical. As a result, we can conclude that, at
present, there are three major models of peer review and related editorial workflow:</p>
${generateUnorderedList(['Model 1: traditional model (pre-publication peer review),', 'Model 2: registered reports,', 'Model 3: “Publish-Review-Curate” (post-publication review).'])}
    ` 
};
 const manuscriptData = {
        9: {
            title: 'Evolution of Peer Review in Scientific Communication',
            doi: '10.31235/osf.io/b2ra3',
            published: 'Published on Nov 19, 2024',
            reviews: [],
            authors: [{
                name: 'Dmitry Kochetkov',
                affiliations: [],
            }],
            sections: article9Sections,
        },
        12: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
        13: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
        14: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
        15: {
            meta: {
                doi: '',
                reviews: [],
                authors: [{
                    name: '',
                    reviewNumber: 1,
                }]
            },
            fullText: {
                sections: {
                    abstract: '',
                }
            },
            peerReview: '',
        },
    }

document.addEventListener('DOMContentLoaded', ()=> {
    const $content = document.querySelector('#content');
    const $authorsList = document.querySelector('#author-links');
    const tabs = document.querySelectorAll('.tab');
    const $doi = document.querySelector('#doi');
    const $title = document.querySelector('#title');
    const $articleNav = document.querySelector('#article-nav > ul');
    const $publishedOn = document.querySelector('.published-on');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    const articleNumber = getArticleNumberFromURL();
    const manuscript = manuscriptData[articleNumber];
    const { doi, sections, title, authors, published } = manuscript;


    $authorsList.innerHTML = authors.map((author) => `<a href="#">${author.name}</a>`).join(', ');

    published && ($publishedOn.textContent = published);
    title && ($title.textContent = title);
    doi && ($doi.textContent = `https://doi.org/${doi}`);
    doi && ($doi.href = `https://doi.org/${doi}`);
    articleNumber && ($content.innerHTML = '');
    Object.entries(sections).forEach(([k, v]) => {
        const title = document.createElement('h3')
        const sectionContent = document.createElement('p');
        title.id = k;
        title.textContent = k;
        sectionContent.innerHTML = v;
        $content.appendChild(title);
        $content.appendChild(sectionContent);
        $articleNav.innerHTML += `<li><a href="#${k}">${k}</a></li>`;
    });
})
