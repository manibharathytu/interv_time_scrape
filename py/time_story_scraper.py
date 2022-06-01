# This function returns an array of strings which are in bettwen the start_str and end_str in the text 
def find_all_string_between(str_start, str_end, text, mid_strs):

  start = text.find(str_start)
  end = text.find(str_end)

  if(start is -1 or end is -1):
    return
  else:
    mid_str = text[start+len(str_start):end]
    mid_strs.append(mid_str)
    find_all_string_between(str_start, str_end, text[end+1:], mid_strs)

# getting all the titles in array
def get_titles(time_site_html_text):
  start_str="<h3 class=\"latest-stories__item-headline\">"
  end_str="</h3>\n              </a>\n              <time"
  titles=[]
  find_all_string_between(start_str, end_str, time_site_html_text, titles)
  return titles

# getting all the links in array
def get_links(time_site_html_text):
  start_str="<li class=\"latest-stories__item\">\n              <a href=\""
  end_str="\">\n                <h3 class=\"latest-stories__item-headline\">"
  links=[]
  find_all_string_between(start_str, end_str, time_site_html_text, links)
  return links

def get_time_stories():
   import requests
   url ='https://time.com'
   # fetch the url 
   x = requests.get(url)
   # get the html text
   time_site_html_text = x.text

   links = get_links(time_site_html_text)
   titles = get_titles(time_site_html_text)

   list_of_titles_links = []
   for item in zip(titles, links):
      list_of_titles_links.append({'title':item[0], 'link':url+item[1]})
   print(list_of_titles_links)
   return list_of_titles_links