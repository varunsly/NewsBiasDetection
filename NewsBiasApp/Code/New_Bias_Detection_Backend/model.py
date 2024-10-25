from newsapi import NewsApiClient
import ktrain
from ktrain import text
import pandas as pd
def get_biased_news(category):
  predictor_load = ktrain.load_predictor('News Bias')
  bias_dict = {
      0 : "neutral",
      1: "right",
      2: "left"
  }
  # Init
  newsapi = NewsApiClient(api_key='e6cdd1bd9e3f473eae965351ded6c67f')

  # /v2/top-headlines
  top_headlines = newsapi.get_top_headlines(category=category,
                                            country = "in",
                                            language='en',)
  
  df = pd.DataFrame(top_headlines["articles"])
  df = df.drop(columns=["source", "author", "url", "urlToImage", "publishedAt"])
  df["data"] = df["title"] + " " + df["description"] + " " + df["content"]
  arr = [df["data"].isna()]
  biases = predictor_load.predict(df[~df["data"].isna()]["data"].values)
  news_list = []
  count = 0
  for news, na in zip(top_headlines["articles"], arr[0].values):
    if ~na:
      news["bias"] = bias_dict[biases[count]]
      count += 1
      news_list.append(news)
  return {"articles" : news_list}


#####Calling Function

get_biased_news("general")