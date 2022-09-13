import requests from bs4 import BeautifulSoup
import matplotlib.pyplot as plt


def main():
    url = "https://news.ycombinator.com/item?id=29782099"
    response = requests.get(url)

    soup = BeautifulSoup(response.content, "html.parser")
    url1="https://www.flipkart.com/6bo/b5g/~cs-t0z0s7ciya/pr?sid=6bo%2Cb5g&collection-tab-name=Premium+Laptops&hpid=TBMk454sqQRjppfZsSFmkap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTQ1LDk5MCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkNPTUdBM0hXSlZRRFpZR1EiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcmVtaXVtIExhcHRvcHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_1451fafc-bdab-4cd8-a64a-3228e4640f03_3.SG7UU0MTI0RX&ssid=d3cnstd8pc0000001663033451055&otracker=hp_omu_Best%2Bof%2BElectronics_4_3.dealCard.OMU_SG7UU0MTI0RX_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_4_NA_view-all_3&cid=SG7UU0MTI0RX"
    url2="https://www.amazon.in/b?node=26297682031&pf_rd_r=BSDB1EY6AV3J8XT1RP2T&pf_rd_p=1eadb2e5-0143-4c80-b547-96ad6cd545bc&pd_rd_r=842c5728-602e-48b1-a031-05dc90d56d98&pd_rd_w=1x73A&pd_rd_wg=v3Zuc&ref_=pd_gw_unk"
    elements = soup.find_all(class_="ind", indent=0)
    comments = [e.find_next(class_="comment") for e in elements]

    keywords = {
        "python": 0,
        "javascript": 0,
        "typescript": 0,
        "ruby": 0,
        "java": 0,
        "rust": 0,
        "c#": 0,
    }

    for comment in comments:
        comment_text = comment.get_text().lower()
        words = comment_text.split(" ")
        words = {w.strip(".,/:;!@") for w in words}

        for k in keywords:
            if k in words:
                keywords[k] += 1

    print(keywords)

    plt.bar(keywords.keys(), keywords.values())
    plt.xlabel("Language")
    plt.ylabel("# of Mentions")
    plt.show()


if __name__ == "__main__":
    main()